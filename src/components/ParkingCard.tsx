'use client';

import { MapPin, Star, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PARKING_SPOTS } from '@/lib/constants';

export function ParkingCard({ spot, onBook }: { spot: (typeof PARKING_SPOTS)[0] | null, onBook?: () => void }) {
  if (!spot) return null;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-200/30 dark:border-blue-900/30 bg-white/50 dark:bg-slate-900/50 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-40 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800">
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${spot.type === 'free' ? 'bg-green-500' : 'bg-blue-600'}`}>
            {spot.type === 'free' ? 'FREE' : spot.priceType.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-bold text-gray-900 dark:text-white leading-tight line-clamp-2">
            {spot.name}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold text-gray-900 dark:text-white">{spot.rating}</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin size={14} className="text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">{spot.address}</p>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
          <Zap size={16} className="text-green-500" />
          <span className="text-green-600 dark:text-green-400">{spot.available} spots available</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {spot.cctv && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20">
              <Lock size={12} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs text-blue-600 dark:text-blue-400">CCTV</span>
            </div>
          )}
          {spot.verified && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-50 dark:bg-green-900/20">
              <span className="text-xs text-green-600 dark:text-green-400">✓ Verified</span>
            </div>
          )}
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center gap-2">
          <div>
            {spot.type === 'free' ? (
              <span className="text-lg font-bold text-green-600 dark:text-green-400">Free</span>
            ) : (
              <>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹{spot.price}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">/{spot.priceType}</span>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const url = `https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}&destination_place_id=${encodeURIComponent(spot.name)}`;
                window.open(url, '_blank');
              }}
              className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-xs font-semibold transition-colors"
              title="Get directions in Google Maps"
            >
              Directions
            </button>
            <button
              onClick={onBook}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-xs font-semibold transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
