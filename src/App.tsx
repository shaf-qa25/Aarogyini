import React from 'react';
import Hero from './components/Hero';
import DetectionSuite from './components/DetectionSuite';
import TruthModule from './components/TruthModule';
import CommunityQA from './components/CommunityQA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DetectionSuite />
        <TruthModule />
        <CommunityQA />
      </main>
      <Footer />
    </>
  );
};

export default App;
