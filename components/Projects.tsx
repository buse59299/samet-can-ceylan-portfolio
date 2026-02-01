import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from translations.json based on current language
    fetch('/translations.json')
      .then(res => res.json())
      .then(data => {
        const currentLang = i18n.language as 'en' | 'tr';
        const projectsData = data[currentLang].projects.items;
        setProjects(projectsData);
      });
  }, [i18n.language]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" data-purpose="projects" id="projects">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-2xl font-bold text-white tracking-widest border-l-4 border-neon-orange pl-4">{t('projects.title')}</h3>
        <span className="text-xs text-neon-cyan font-mono hidden sm:block">{t('projects.rendering_count')}: {projects.length}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a1520] to-[#050a10] border border-neon-cyan/30 hover:border-neon-cyan transition-colors group relative overflow-hidden hover:shadow-glow-cyan flex flex-col h-full"
          >
            <div className="aspect-video w-full overflow-hidden bg-black relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className={`absolute bottom-0 left-0 ${project.statusColor} text-black text-xs font-bold px-2 py-1`}>
                {project.status}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs border border-white/20 px-2 py-1 rounded text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <a href="#" className="text-neon-orange text-sm hover:underline decoration-neon-orange underline-offset-4">
                  {t('projects.access_data')}
                </a>
                {project.videoUrl && (
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-cyan text-sm hover:text-white transition-colors border border-neon-cyan/30 hover:border-neon-cyan px-3 py-1 rounded"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch Video</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;