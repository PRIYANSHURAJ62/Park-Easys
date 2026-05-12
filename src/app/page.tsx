'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorks } from '@/components/HowItWorks';
import { PaymentMethods } from '@/components/PaymentMethods';
import { ParkingCard } from '@/components/ParkingCard';
import { Testimonials } from '@/components/Testimonials';
import { FAQSection } from '@/components/FAQSection';
import { PARKING_SPOTS } from '@/lib/constants';
import { MapPin, Search, Heart } from 'lucide-react';

const DEMO_QUERIES = ['Connaught Place', 'IGI Airport', 'DLF Mall', 'Community Parking'];

interface BookingModalProps {
  spot: (typeof PARKING_SPOTS)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ spot, isOpen, onClose }: BookingModalProps) {
  const [duration, setDuration] = useState(1);

  if (!isOpen || !spot) return null;

  const totalPrice = spot.type === 'free' ? 0 : spot.price * duration;
  const serviceFee = Math.round(totalPrice * 0.05);

  const handleConfirm = () => {
    alert(`✅ Booking confirmed!\n\n${spot.name}\nDuration: ${duration} ${spot.priceType === 'hourly' ? 'hour(s)' : 'day(s)'}\nTotal: ₹${totalPrice + serviceFee}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Book {spot.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{spot.address}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">✕</button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <label className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              Duration
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {[...Array(12)].map((_, index) => (
                  <option key={index} value={index + 1}>{index + 1} {spot.priceType === 'hourly' ? 'hour' : 'day'}{index + 1 > 1 ? 's' : ''}</option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              Start Time
              <input
                type="datetime-local"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800 mb-6">
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300 mb-2">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300 mb-2">
              <span>Service Fee</span>
              <span>₹{serviceFee}</span>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between text-base font-semibold text-slate-900 dark:text-white">
              <span>Total</span>
              <span>₹{totalPrice + serviceFee}</span>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 px-6 py-4 text-white font-semibold hover:opacity-95 transition"
          >
            Confirm Booking
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [bookingSpot, setBookingSpot] = useState<(typeof PARKING_SPOTS)[0] | null>(null);

  const filteredSpots = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PARKING_SPOTS.filter((spot) => {
      if (!query) return true;
      return (
        spot.name.toLowerCase().includes(query) ||
        spot.address.toLowerCase().includes(query) ||
        spot.features.some((feature) => feature.toLowerCase().includes(query))
      );
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'availability':
          return b.available - a.available;
        default:
          return b.rating - a.rating;
      }
    });
  }, [searchQuery, sortBy]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <HeroSection searchQuery={searchQuery} onSearch={setSearchQuery} />
      <StatsSection />

      {/* Parking Spots Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Parking Spots
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Browse verified parking spaces near you and book instantly.
            </p>
          </motion.div>

          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] items-center">
            <div className="flex flex-wrap gap-2">
              {DEMO_QUERIES.map((query) => (
                <button
                  key={query}
                  onClick={() => setSearchQuery(query)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition"
                >
                  {query}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                <Search size={18} className="text-slate-500 dark:text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search parking, location or feature"
                  className="ml-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                <option value="rating">Top Rated</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="availability">Most Available</option>
              </select>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {filteredSpots.map((spot) => (
              <div key={spot.id} className="relative">
                <ParkingCard spot={spot} onBook={() => setBookingSpot(spot)} />
                <button
                  onClick={() => toggleFavorite(spot.id)}
                  className={`absolute top-4 right-4 rounded-full p-2 shadow-lg transition ${
                    favorites.includes(spot.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-slate-600 hover:text-red-500 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  <Heart size={16} fill={favorites.includes(spot.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            ))}
          </div>

          {filteredSpots.length === 0 && (
            <div className="mt-12 rounded-3xl bg-slate-50 p-12 text-center dark:bg-slate-900">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">No spots matched your search</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Try a different location, filter, or search term.</p>
            </div>
          )}
        </div>
      </section>

      <FeaturesSection />
      <HowItWorks />
      <PaymentMethods />
      <Testimonials />
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Save Time on Parking?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 5000+ users finding parking in seconds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Download App
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                Explore Platform
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal spot={bookingSpot} isOpen={!!bookingSpot} onClose={() => setBookingSpot(null)} />
    </>
  );
}
