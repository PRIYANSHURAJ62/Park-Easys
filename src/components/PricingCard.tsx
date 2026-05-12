'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/lib/constants';

export function PricingCard({ plan }: { plan: (typeof SUBSCRIPTION_PLANS)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl backdrop-blur-sm border transition-all duration-300 p-6 flex flex-col ${
        plan.popular
          ? 'border-blue-500 bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30 shadow-xl ring-2 ring-blue-500'
          : 'border-blue-200/30 dark:border-blue-900/30 bg-white/50 dark:bg-slate-900/50'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
            Most Popular
          </span>
        </div>
      )}

      {/* Title and Price */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          ₹{plan.price}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{plan.period}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 mb-6">Perfect for {plan.name.toLowerCase()} users</p>

      {/* CTA Button */}
      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
          plan.popular
            ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white hover:shadow-lg'
            : 'border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30'
        }`}
      >
        Get Started
      </button>

      {/* Benefits */}
      <div className="space-y-3 flex-1">
        {plan.benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-start gap-3"
          >
            <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
