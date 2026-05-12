'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Share2, Heart, Eye, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">🅿️</span>
              </div>
              <span className="font-bold text-white text-lg">ParkEasy</span>
            </div>
            <p className="text-sm text-gray-400">
              Smart parking platform for modern India
            </p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: 'Product',
              links: [
                { label: 'Find Parking', href: '/find-parking' },
                { label: 'List Your Space', href: '/partner' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'How it Works', href: '#how' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Security', href: '/security' },
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors">
                <Share2 size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-400">Get latest updates and offers</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2024 ParkEasy. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Founded & Led by <span className="font-semibold text-gray-300">Priyanshu Raj Chauhan</span>, CEO & Founder
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Share2, label: 'Share', href: '#' },
              { icon: Heart, label: 'Like', href: '#' },
              { icon: Eye, label: 'View', href: '#' },
              { icon: Code, label: 'Dev', href: '#' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                title={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
