'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Matter from 'matter-js';

interface BallpitProps {
    containerId?: string;
    ballCount?: number;
    ballColors?: string[];
    ballSizes?: number[];
    gravity?: number;
    friction?: number;
    restitution?: number;
    zIndex?: number;
}

const Ballpit: React.FC<BallpitProps> = ({
    containerId = 'ballpit-container',
    ballCount = 20,
    ballColors = ['#E75480', '#C3B4F3', '#FF8E8E'],
    ballSizes = [15, 20, 25, 30],
    gravity = 0.015,
    friction = 0.01,
    restitution = 4.0,
    zIndex = -1,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    const cleanupMatter = useCallback(() => {
        if (runnerRef.current) {
            Matter.Runner.stop(runnerRef.current);
            runnerRef.current = null;
        }

        if (renderRef.current) {
            Matter.Render.stop(renderRef.current);
            // Fixed: Added optional chaining and null checks
            if (renderRef.current.canvas) {
                renderRef.current.canvas.remove();
            }
            renderRef.current = null;
        }

        if (engineRef.current) {
            Matter.World.clear(engineRef.current.world, false);
            Matter.Engine.clear(engineRef.current);
            engineRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize Engine
        const engine = Matter.Engine.create({
            gravity: { x: 0, y: gravity },
        });
        engineRef.current = engine;

        const { width, height } = containerRef.current.getBoundingClientRect();

        // Create Renderer
        const render = Matter.Render.create({
            element: containerRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: 'transparent',
                pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
            },
        });
        renderRef.current = render;

        // Walls
        const wallOptions = { isStatic: true, render: { visible: false } };
        Matter.World.add(engine.world, [
            Matter.Bodies.rectangle(width / 2, height + 10, width, 20, wallOptions),
            Matter.Bodies.rectangle(-10, height / 2, 20, height, wallOptions),
            Matter.Bodies.rectangle(width + 10, height / 2, 20, height, wallOptions),
            Matter.Bodies.rectangle(width / 2, -10, width, 20, wallOptions),
        ]);

        // Balls
        const balls = Array.from({ length: ballCount }).map(() => {
            const size = ballSizes[Math.floor(Math.random() * ballSizes.length)];
            const color = ballColors[Math.floor(Math.random() * ballColors.length)];
            return Matter.Bodies.circle(
                Math.random() * width,
                Math.random() * (height / 0.5),
                size,
                {
                    restitution,
                    friction,
                    render: { fillStyle: color }
                }
            );
        });

        Matter.World.add(engine.world, balls);

        // Run everything
        const runner = Matter.Runner.create();
        runnerRef.current = runner;
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        // Resize Handler
        const handleResize = () => {
            if (!containerRef.current || !renderRef.current) return;
            const { width: w, height: h } = containerRef.current.getBoundingClientRect();
            renderRef.current.canvas.width = w;
            renderRef.current.canvas.height = h;
            // Note: Full physics resize logic is complex, 
            // simple refresh is often better for Landing Pages
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cleanupMatter();
        };
    }, [ballCount, ballColors, ballSizes, gravity, friction, restitution, cleanupMatter]);

    return (
        <div
            ref={containerRef}
            id={containerId}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex,
            }}
        />
    );
};

export default Ballpit;