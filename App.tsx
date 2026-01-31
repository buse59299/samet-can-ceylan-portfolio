import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Logs from './components/Logs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      {/* Background Elements managed via index.html CSS classes, but we add structure here */}
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>

      <Header />
      
      <main className="pt-24 pb-12">
        <Hero />
        <Dashboard />
        <Projects />
        <Logs />
      </main>

      <Footer />
    </>
  );
};

export default App;