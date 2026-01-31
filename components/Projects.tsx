import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.log01_title'),
      tags: ['Jetson Nano', 'OpenCV', 'Mechanical Design'],
      description: t('projects.log01_desc'),
      imageUrl: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'v.1.0.4',
      statusColor: 'bg-neon-cyan'
    },
    {
      id: '2',
      title: t('projects.log02_title'),
      tags: ['ROS', 'Geekom Mini PC', 'Full Assembly'],
      description: t('projects.log02_desc'),
      imageUrl: 'https://images.unsplash.com/photo-1535378433864-ed1c29bc06a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'CLASSIFIED',
      statusColor: 'bg-neon-orange'
    },
    {
      id: '3',
      title: t('projects.log03_title'),
      tags: ['Lathe/CNC', 'PLC', 'Operations'],
      description: t('projects.log03_desc'),
      imageUrl: 'https://images.unsplash.com/photo-1565439398868-2a2ec585c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'DEPLOYED',
      statusColor: 'bg-neon-cyan'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" data-purpose="projects" id="projects">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-2xl font-bold text-white tracking-widest border-l-4 border-neon-orange pl-4">{t('header.projects')}</h3>
        <span className="text-xs text-neon-cyan font-mono hidden sm:block">Rendering Objects: {projects.length}</span>
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
              <div className="mt-auto">
                <a href="#" className="text-neon-orange text-sm hover:underline decoration-neon-orange underline-offset-4">
                  &gt;&gt; ACCESS_DATA
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;