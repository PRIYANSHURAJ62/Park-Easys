'use client';

import { motion } from 'framer-motion';
import { Upload, MapPin, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function Partner() {
  const [step, setStep] = useState(1);

  const steps = [
    { num: 1, title: 'Basic Info', icon: '📋' },
    { num: 2, title: 'Location', icon: '📍' },
    { num: 3, title: 'Pricing', icon: '💰' },
    { num: 4, title: 'Verification', icon: '✓' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Become a Parking Partner
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Earn ₹3,000 - ₹25,000/month by listing your parking space
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: '💵', title: 'Earn Money', desc: 'Set your own rates and earn daily' },
            { icon: '🛡️', title: 'Secure', desc: 'Verified users & insurance included' },
            { icon: '📱', title: 'Easy', desc: 'Manage everything from the app' },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-blue-200/20 dark:border-blue-900/20 text-center">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-900/20"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((s, idx) => (
                <div key={s.num} className="flex flex-col items-center flex-1">
                  <motion.div
                    animate={{
                      backgroundColor: step >= s.num ? '#2563eb' : '#e5e7eb',
                      color: step >= s.num ? '#fff' : '#6b7280',
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 relative transition-all"
                  >
                    {step > s.num ? '✓' : s.num}
                  </motion.div>
                  <p className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                    {s.title}
                  </p>
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute w-full h-1 top-6 left-1/2 ${step > s.num ? 'bg-blue-600' : 'bg-gray-300'}`}
                      style={{
                        marginLeft: `${idx + 1.5}rem`,
                        width: 'calc(100% - 3rem)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="mb-8">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Tell Us About You
                </h2>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <MapPin size={24} />
                  Where is Your Parking?
                </h2>
                <input
                  type="text"
                  placeholder="Street address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Total parking slots"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <DollarSign size={24} />
                  Set Your Pricing
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Hourly Rate (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 50"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Daily Rate (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 200"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Rate (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 3000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Verification & Photos
                </h2>

                {/* Photo Upload */}
                <div className="border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto mb-2 text-blue-600" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Upload parking photos
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    At least 3 photos required
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  {[
                    'Valid government ID',
                    'Parking space proof of ownership',
                    'Recent parking photos',
                    'CCTV installation (optional)',
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => step === 4 ? console.log('Submit') : setStep(step + 1)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              {step === 4 ? 'Submit & Verify' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
