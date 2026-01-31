import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Logs: React.FC = () => {
  const { t } = useTranslation();

  const logs = [
    {
      id: '5',
      title: t('logs.step5'),
      color: 'text-neon-cyan',
      dotColor: 'bg-neon-cyan',
      border: 'border-neon-cyan'
    },
    {
      id: '4',
      title: t('logs.step4'),
      color: 'text-white',
      dotColor: 'bg-white',
      border: 'border-white'
    },
    {
      id: '3',
      title: t('logs.step3'),
      color: 'text-white',
      dotColor: 'bg-white',
      border: 'border-white'
    },
    {
      id: '2',
      title: t('logs.step2'),
      color: 'text-gray-400',
      dotColor: 'bg-gray-500',
      border: 'border-gray-500'
    },
    {
      id: '1',
      title: t('logs.step1'),
      color: 'text-gray-500',
      dotColor: 'bg-gray-600',
      border: 'border-gray-600'
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" data-purpose="experience" id="logs">
      <h3 className="text-2xl font-bold text-white tracking-widest mb-12 text-center">{t('logs.timeline_title')}</h3>

      <div className="relative border-l-2 border-neon-cyan/20 ml-4 md:ml-10 space-y-12">
        {logs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${log.border} bg-[#050a10] group-hover:bg-neon-cyan transition-colors ${log.color === 'text-neon-cyan' ? 'shadow-[0_0_10px_#00f0ff]' : ''}`}></div>

            <div className="flex flex-col mb-1">
              <h4 className={`text-xl font-bold ${log.color} group-hover:text-neon-orange transition-colors`}>{log.title}</h4>
            </div>

            {/* Connector Line Highlight on Hover */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-neon-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 -ml-[2px]" />
          </motion.div>
        ))}
        {/* Bottom fade */}
        <div className="absolute top-full left-0 w-2 h-20 bg-gradient-to-b from-neon-cyan/20 to-transparent -ml-[1px]"></div>
      </div>
    </section>
  );
};

export default Logs;