'use client';

import { motion } from 'framer-motion';
import { Zap, Lock, BarChart3, MapPin, Clock, FileText } from 'lucide-react';

const FEATURES = [
  {
    icon: MapPin,
    title: 'Real-Time Availability',
    description: 'See live parking availability across your city instantly',
  },
  {
    icon: Zap,
    title: 'Quick Booking',
    description: 'Reserve parking in seconds with one-click booking',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Bank-level security for all your transactions',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Get parking insights and recommendations based on traffic',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via chat and phone',
  },
  {
    icon: FileText,
    title: 'Verified Spots',
    description: 'All parking spaces are verified and regularly audited',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Smart Parking
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to find and book parking effortlessly
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-900/20 group hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-green-500/40 transition-all">
                <feature.icon size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
