'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const EARNINGS_DATA = [
  { day: 'Mon', earnings: 3500 },
  { day: 'Tue', earnings: 2800 },
  { day: 'Wed', earnings: 4200 },
  { day: 'Thu', earnings: 3900 },
  { day: 'Fri', earnings: 5200 },
  { day: 'Sat', earnings: 6100 },
  { day: 'Sun', earnings: 5800 },
];

const OCCUPANCY_DATA = [
  { time: '6AM', occupied: 35 },
  { time: '9AM', occupied: 75 },
  { time: '12PM', occupied: 92 },
  { time: '3PM', occupied: 88 },
  { time: '6PM', occupied: 95 },
  { time: '9PM', occupied: 65 },
];

export function OwnerDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Parking Owner Dashboard 🏢</h1>
        <p className="text-green-100">Manage your parking space and track earnings</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            icon: TrendingUp,
            label: 'Monthly Earnings',
            value: '₹28,450',
            color: 'from-green-500 to-emerald-600',
          },
          {
            icon: Calendar,
            label: 'Active Bookings',
            value: '18',
            color: 'from-blue-500 to-blue-600',
          },
          {
            icon: Users,
            label: 'Total Users',
            value: '156',
            color: 'from-purple-500 to-purple-600',
          },
          {
            icon: AlertCircle,
            label: 'Pending Requests',
            value: '3',
            color: 'from-orange-500 to-orange-600',
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6`}
          >
            <div className="flex items-start justify-between mb-4">
              <stat.icon size={28} className="opacity-80" />
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
            <p className="text-sm opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Weekly Earnings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={EARNINGS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Occupancy Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Occupancy Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={OCCUPANCY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="occupied" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Parking Spaces */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Your Parking Spaces</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">
            Add Space
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              name: 'Downtown Premium',
              slots: '45/45',
              revenue: '₹5,200',
              occupancy: '100%',
              status: 'Full',
            },
            {
              name: 'Business District',
              slots: '28/30',
              revenue: '₹4,100',
              occupancy: '93%',
              status: 'High',
            },
            {
              name: 'Community Parking',
              slots: '8/20',
              revenue: 'Free',
              occupancy: '40%',
              status: 'Low',
            },
          ].map((space, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{space.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{space.slots} slots</p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    space.status === 'Full'
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : space.status === 'High'
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                        : 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  }`}
                >
                  {space.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Occupancy: <strong className="text-gray-900 dark:text-white">{space.occupancy}</strong>
                </span>
                <span className="font-bold text-gray-900 dark:text-white">{space.revenue}/day</span>
              </div>
              <div className="mt-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full"
                  style={{ width: space.occupancy }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
