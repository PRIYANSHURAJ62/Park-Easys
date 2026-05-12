'use client';

import { CreditCard, Smartphone, Building2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const PAYMENT_METHODS = [
  {
    icon: Smartphone,
    name: 'UPI',
    description: 'Instant payment via Google Pay, Paytm, PhonePe',
  },
  {
    icon: CreditCard,
    name: 'Credit/Debit Card',
    description: 'All major cards accepted securely',
  },
  {
    icon: Building2,
    name: 'Net Banking',
    description: 'Direct bank transfer from any bank',
  },
  {
    icon: Zap,
    name: 'Wallet',
    description: 'Use your ParkEasy wallet balance',
  },
];

export function PaymentMethods() {
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
            Multiple Payment Options
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose your preferred payment method
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {PAYMENT_METHODS.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20 text-center hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon size={28} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {method.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
