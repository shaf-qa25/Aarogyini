import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string; // e.g. "rgba(255, 107, 107, 0.2)"
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        // Mouse position relative to the card
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card-container ${className}`}
        >
            {/* The Glow Layer */}
            <div
                className="spotlight-glow-layer"
                style={{
                    "--x": `${position.x}px`,
                    "--y": `${position.y}px`,
                    "--spotlight-color": spotlightColor,
                } as React.CSSProperties}
            />

            {/* Your Content */}
            <div className="spotlight-content">
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;