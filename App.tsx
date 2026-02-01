import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Logs from './components/Logs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<'en' | 'tr'>(i18n.language as 'en' | 'tr');

  const handleLanguageChange = (newLang: 'en' | 'tr') => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {/* Background Elements managed via index.html CSS classes, but we add structure here */}
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>

      <Header lang={lang} onLanguageChange={handleLanguageChange} />
      
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