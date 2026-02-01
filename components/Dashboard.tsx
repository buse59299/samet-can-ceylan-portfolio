import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { GaugeProps } from '../types';

const Gauge: React.FC<GaugeProps> = ({ percentage, label, color }) => {
  const dashArray = 126; // Approx arc length for semi-circle view
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    // Smooth animation from 0 to target percentage
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = percentage / steps;
    const stepDuration = duration / steps;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentPercent(prev => {
        const next = Math.min(increment * step, percentage);
        if (next >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return next;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [percentage]);

  const dashOffset = dashArray - (dashArray * (currentPercent / 100));

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 50">
          {/* Background Track */}
          <path
            d="M 10,50 A 40,40 0 1,1 90,50"
            fill="none"
            stroke="#1a222e"
            strokeLinecap="round"
            strokeWidth="8"
          />
          {/* Active Arc */}
          <motion.path
            initial={{ strokeDashoffset: dashArray }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            d="M 10,50 A 40,40 0 1,1 90,50"
            fill="none"
            stroke={color}
            strokeDasharray={dashArray}
            strokeLinecap="round"
            strokeWidth="8"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-1">
          <span className="text-2xl font-bold text-white">
            {currentPercent.toFixed(0)}%
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-400 font-mono tracking-tighter">{label}</span>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" data-purpose="dashboard" id="specs">
      <div className="flex items-center gap-3 mb-8 border-b border-neon-cyan/30 pb-2">
        <div className="w-3 h-3 bg-neon-orange animate-pulse rounded-full"></div>
        <h3 className="text-xl font-bold tracking-widest text-white">{t('dashboard.title')}</h3>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-tech-gray/40 border border-white/5 p-6 rounded-lg backdrop-blur-sm"
      >
        {/* Top Row: Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Gauge percentage={95} label={t('dashboard.mech_eng')} color="#00f0ff" />
          <Gauge percentage={85} label={t('dashboard.elec_sys')} color="#ff9900" />
          <Gauge percentage={90} label={t('dashboard.soft_dev')} color="#00f0ff" />
        </div>

        {/* Bottom Row: KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-6">
          <KPICard value="34°" label={t('dashboard.kpi_core_temp')} status="NOMINAL" color="border-neon-cyan" textColor="text-neon-cyan" />
          <KPICard value="42%" label={t('dashboard.kpi_cpu_load')} status="OPTIMAL" color="border-neon-orange" textColor="text-neon-orange" />
          <KPICard value="12ms" label={t('dashboard.kpi_latency')} status="LOW" color="border-neon-cyan" textColor="text-neon-cyan" />
          <KPICard value="OK" label={t('dashboard.kpi_system')} status="ONLINE" color="border-green-500" textColor="text-green-500" />
        </div>
      </motion.div>
    </section>
  );
};

interface KPIProps {
  value: string;
  label: string;
  status: string;
  color: string;
  textColor: string;
}

const KPICard: React.FC<KPIProps> = ({ value, label, status, color, textColor }) => (
  <div className="flex items-center gap-3">
    <div className={`w-10 h-10 rounded-full border ${color} flex items-center justify-center ${textColor} text-xs font-bold`}>
      {value}
    </div>
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 uppercase">{label}</span>
      <span className="text-sm font-bold text-white">{status}</span>
    </div>
  </div>
);

export default Dashboard;