import React, { useState } from 'react';
import { Menu, X, Globe, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  lang: 'en' | 'tr';
  onLanguageChange: (lang: 'en' | 'tr') => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'tr' : 'en';
    onLanguageChange(newLang);
  };

  const navItems = [
    { label: t('header.home'), href: '#' },
    { label: t('header.specs'), href: '#specs' },
    { label: t('header.projects'), href: '#projects' },
    { label: t('header.logs'), href: '#logs' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050a10]/95 backdrop-blur-md border-b border-white/10" data-purpose="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Identity */}
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-white">SAMET_CAN_CEYLAN</span>
            <span className="text-xs text-neon-cyan animate-pulse">{t('header.status_init')}</span>
          </div>

          {/* Right: Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-neon-cyan transition-colors group">
                    <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                    <span className="mx-1">{item.label}</span>
                    <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">]</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CV Download Button */}
            <a
              href="/CV.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan hover:bg-neon-cyan hover:text-black text-neon-cyan text-xs transition-all uppercase tracking-wider font-semibold"
            >
              <Download className="w-4 h-4" />
              {t('header.download_cv')}
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 border border-white/20 hover:border-neon-cyan text-xs text-gray-300 hover:text-neon-cyan transition-all uppercase tracking-wider bg-black/50"
            >
              <Globe className="w-3 h-3" />
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="/CV.pdf"
              download
              className="flex items-center gap-1 px-2 py-1 border border-neon-cyan text-neon-cyan text-xs uppercase tracking-wider"
            >
              <Download className="w-3 h-3" />
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 border border-white/20 text-xs text-gray-300 uppercase tracking-wider"
            >
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-neon-cyan border border-neon-cyan p-1 hover:bg-neon-cyan/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050a10] border-b border-white/10">
          <ul className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <span className="text-neon-cyan mr-2">&gt;</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;