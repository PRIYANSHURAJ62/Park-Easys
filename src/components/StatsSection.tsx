'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants';

export function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-blue-200/20 dark:border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2"
              >
                {stat.label}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
