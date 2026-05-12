'use client';

import { motion } from 'framer-motion';
import { Car, BookOpen, Wallet, MapPin, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const BOOKING_DATA = [
  { date: 'Mon', bookings: 4 },
  { date: 'Tue', bookings: 3 },
  { date: 'Wed', bookings: 2 },
  { date: 'Thu', bookings: 5 },
  { date: 'Fri', bookings: 8 },
  { date: 'Sat', bookings: 6 },
  { date: 'Sun', bookings: 7 },
];

const PARKING_TYPES = [
  { name: 'Free', value: 35, color: '#22c55e' },
  { name: 'Paid', value: 65, color: '#2563eb' },
];

const RECENT_BOOKINGS = [
  {
    id: 1,
    location: 'Downtown Premium',
    date: 'Today, 2:30 PM',
    amount: '₹150',
    status: 'Active',
  },
  {
    id: 2,
    location: 'Business District',
    date: 'Yesterday, 10:00 AM',
    amount: '₹300',
    status: 'Completed',
  },
  {
    id: 3,
    location: 'Community Parking',
    date: '2 days ago',
    amount: 'Free',
    status: 'Completed',
  },
];

export function UserDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Rajesh! 👋</h1>
        <p className="text-blue-100">You have 2 active bookings and 3 favorite spots</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            icon: Car,
            label: 'Active Bookings',
            value: '2',
            color: 'from-blue-500 to-blue-600',
          },
          {
            icon: BookOpen,
            label: 'Total Bookings',
            value: '24',
            color: 'from-purple-500 to-purple-600',
          },
          {
            icon: Wallet,
            label: 'Wallet Balance',
            value: '₹2,450',
            color: 'from-green-500 to-emerald-600',
          },
          {
            icon: MapPin,
            label: 'Favorite Spots',
            value: '3',
            color: 'from-yellow-500 to-orange-600',
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
      <div className="grid md:grid-cols-3 gap-6">
        {/* Bookings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Bookings This Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={BOOKING_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ fill: '#2563eb', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Parking Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Parking Types Used</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={PARKING_TYPES}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {PARKING_TYPES.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {PARKING_TYPES.map((type) => (
              <div key={type.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: type.color }}
                  />
                  <span className="text-gray-700 dark:text-gray-300">{type.name}</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{type.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-900/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Recent Bookings</h3>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
            View All
          </a>
        </div>

        <div className="space-y-3">
          {RECENT_BOOKINGS.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{booking.location}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{booking.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900 dark:text-white">{booking.amount}</span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    booking.status === 'Active'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {booking.status}
                </span>
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition">
                  <MoreVertical size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
