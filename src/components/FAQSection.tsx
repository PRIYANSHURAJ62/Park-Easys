'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ } from '@/lib/constants';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about ParkEasy
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border border-blue-200/20 dark:border-blue-900/20 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform text-blue-600 dark:text-blue-400 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{ height: openId === item.id ? 'auto' : 0, opacity: openId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 border-t border-blue-200/20 dark:border-blue-900/20">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
