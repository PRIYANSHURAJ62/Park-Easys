'use client';

import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-blue-200/20 dark:border-blue-900/20 bg-white/80 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={process.env.NEXT_PUBLIC_BASE_PATH || '/'} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-lg">🅿️</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              ParkEasy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { label: 'Home', href: process.env.NEXT_PUBLIC_BASE_PATH || '/' },
              { label: 'Find Parking', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/find-parking` },
              { label: 'Owner', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/owner` },
              { label: 'Pricing', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pricing` },
              { label: 'Partner', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/partner` },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>

            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/login`}
              className="hidden sm:inline-block px-4 py-2 rounded-lg text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition"
            >
              Login
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/signup`}
              className="hidden sm:inline-block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { label: 'Home', href: process.env.NEXT_PUBLIC_BASE_PATH || '/' },
              { label: 'Find Parking', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/find-parking` },
              { label: 'Owner', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/owner` },
              { label: 'Pricing', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pricing` },
              { label: 'Partner', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/partner` },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/login`}
                className="block px-4 py-2 rounded-lg text-center text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 mb-2"
              >
                Login
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/signup`}
                className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
