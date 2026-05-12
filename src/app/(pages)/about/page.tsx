'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About ParkEasy</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transforming urban parking through smart technology and community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'Make urban parking easy, affordable, and stress-free for everyone in India',
              },
              {
                icon: Lightbulb,
                title: 'Our Vision',
                desc: 'Be the most trusted smart parking platform connecting drivers and parking owners',
              },
              {
                icon: Users,
                title: 'Our Values',
                desc: 'Trust, transparency, and community-driven innovation in every solution',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center">
                    <item.icon size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                ParkEasy was founded in 2024 by a group of engineers and entrepreneurs frustrated with the urban parking crisis in
                Indian cities. We noticed that finding parking was taking more time than the actual trip, and many parking spaces
                remained empty while drivers searched endlessly.
              </p>
              <p>
                What started as a simple idea—connecting drivers with available parking spaces—grew into a full-fledged smart parking
                platform that empowers both users and parking owners. Today, ParkEasy operates in 20+ cities across India, helping
                thousands of users save time and money daily.
              </p>
              <p>
                Our commitment is to make urban mobility easier, one parking spot at a time. We leverage cutting-edge technology,
                real-time data, and community feedback to continuously improve our platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-[360px_1fr] items-center"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <Image
                src="/ceo.jpg"
                alt="Priyanshu Raj Chauhan"
                width={720}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4">
                Founder & CEO
              </p>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Priyanshu Raj Chauhan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Priyanshu is the visionary behind ParkEasy. With a passion for technology and urban mobility,
                he founded the platform to make parking easy, efficient, and accessible for every driver in India.
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                  Founded ParkEasy to solve real-world urban parking challenges
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                  Leads product strategy, partnerships, and customer experience
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                  Focused on innovation, growth, and community-driven service
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Passionate inventors building the future of urban mobility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Priyanshu Raj Chauhan', role: 'Founder & CEO', image: '/ceo.jpg' },
              { name: 'Priya Sharma', role: 'CTO', emoji: '👩‍💻' },
              { name: 'Arjun Patel', role: 'COO', emoji: '👨‍🏫' },
              { name: 'Sneha Singh', role: 'Head of Design', emoji: '👩‍🎨' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border border-gray-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {member.emoji}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
