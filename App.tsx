import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import DownloadSection from './components/Download';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <DownloadSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;