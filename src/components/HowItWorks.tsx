'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How ParkEasy Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find and book parking in just 4 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {idx < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
              )}

              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-900/20 h-full">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
