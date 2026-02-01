import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-12 md:pt-0" data-purpose="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Info */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold uppercase leading-tight glitch-text text-white whitespace-pre-line"
            data-text={t('hero.title')}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-neon-orange font-light tracking-wide"
          >
            {t('hero.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 max-w-lg leading-relaxed border-l-2 border-neon-cyan pl-4"
          >
            {t('hero.description')}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-tech bg-neon-cyan text-black px-8 py-3 font-bold tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              {t('hero.cta_init')}
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-tech border border-neon-cyan text-neon-cyan px-8 py-3 font-bold tracking-wider hover:bg-neon-cyan/10 transition-colors cursor-pointer"
            >
              {t('hero.cta_blueprints')}
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-8"
          >
            <div>
              <div className="text-3xl font-bold text-white">05+</div>
              <div className="text-xs text-gray-500 mt-1">{t('hero.stat_projects')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2X</div>
              <div className="text-xs text-gray-500 mt-1 leading-tight">{t('hero.stat_finalist')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-orange">100%</div>
              <div className="text-xs text-gray-500 mt-1 leading-tight">{t('hero.stat_integration')}</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Robotic Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group"
          data-purpose="hero-image"
        >
          {/* Decorative Corners (Outer) */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-cyan z-10"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neon-cyan z-10"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neon-cyan z-10"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-cyan z-10"></div>

          {/* Holographic Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-50 pointer-events-none z-10"></div>

          <div className="relative overflow-hidden bg-tech-gray/50 hud-brackets">
            {/* Using a placeholder robotic arm image that looks industrial */}
            <img
              alt="Robotic Arm Prototype"
              className="w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              src="/ana.jpeg"
              style={{ maxHeight: '400px' }}
            />
            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.8)] animate-[scan_3s_ease-in-out_infinite] z-20"></div>

            <div className="absolute bottom-4 right-4 text-xs font-mono text-neon-cyan border border-neon-cyan px-2 py-1 bg-black/50 z-20">
              SYS.ID: ARM_V4.2
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;