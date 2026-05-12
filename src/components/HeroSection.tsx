'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Zap } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export function HeroSection({ searchQuery, onSearch }: HeroSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapStatus, setMapStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || !mapRef.current) {
      setMapStatus('error');
      return;
    }

    const loader = new Loader({ apiKey, version: 'weekly' }) as any;
    let map: any;
    let markers: any[] = [];

    loader.load()
      .then(() => {
        const googleMaps = (window as any).google;
        if (!googleMaps || !mapRef.current) {
          setMapStatus('error');
          return;
        }

        map = new googleMaps.maps.Map(mapRef.current, {
          center: { lat: 28.6139, lng: 77.2090 },
          zoom: 12,
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f7fa' }],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#d2e8ff' }],
            },
          ],
        });

        const demoLocations = [
          { title: 'Connaught Place', position: { lat: 28.6335, lng: 77.2190 } },
          { title: 'DLF Mall Saket', position: { lat: 28.5245, lng: 77.2125 } },
          { title: 'IGI Airport', position: { lat: 28.5562, lng: 77.1000 } },
        ];

        markers = demoLocations.map((location) => new googleMaps.maps.Marker({
          position: location.position,
          map,
          title: location.title,
        }));

        setMapStatus('ready');
      })
      .catch(() => {
        setMapStatus('error');
      });

    return () => {
      markers.forEach((marker) => marker && marker.setMap(null));
      if (map) {
        map = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-slate-900 pt-20 pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Find Parking in
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Seconds, Not Hours
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Smart parking platform that connects you to 10,000+ verified parking spots across 20+ cities. Real-time availability, instant booking, and zero hassle.
            </p>

            {/* Search Bar */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl mb-6 border border-blue-200/20 dark:border-blue-900/20"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search nearby parking..."
                  className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={() => onSearch(searchQuery)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Search
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                <Zap size={18} className="inline mr-2" />
                Find Parking
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
              >
                List Your Space
              </motion.button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { icon: '✓', text: 'Real-time Availability' },
                { icon: '🔒', text: 'Secure Booking' },
                { icon: '⚡', text: 'Instant Confirmation' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-lg">{feature.icon}</span>
                  {feature.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-800">
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-950" />
              <div ref={mapRef} className="absolute inset-0 h-full w-full" />

              {(mapStatus === 'loading' || mapStatus === 'error') && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 text-center px-6">
                  <p className="text-sm font-semibold text-white">
                    {mapStatus === 'loading' ? 'Loading map...' : 'Map failed to load.'}
                  </p>
                  {mapStatus === 'error' && (
                    <p className="max-w-xs text-xs text-white/80">
                      Add your Google Maps API key to <code className="rounded bg-slate-900 px-1 py-0.5">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in your environment.
                    </p>
                  )}
                </div>
              )}

              <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl border border-white/80 dark:border-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Current Area</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">New Delhi, India</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    <Navigation size={16} /> Live map
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">8 min</p>
                    <p>Avg. arrival</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">42 spots</p>
                    <p>Open near you</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
