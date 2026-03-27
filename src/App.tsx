import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import MythBuster from './components/MythBuster';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommunityFeed from './components/CommunityFeed';

const App: React.FC = () => {
  return (
    <>

      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <MythBuster />
        <CommunityFeed />
      </main>
      <Footer />
    </>
  );
};

export default App;
