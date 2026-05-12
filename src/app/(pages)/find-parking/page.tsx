'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ParkingCard } from '@/components/ParkingCard';
import { PARKING_SPOTS } from '@/lib/constants';
import {
  MapPin,
  Search,
  SlidersHorizontal,
  SortAsc,
  Map,
  List,
  Heart,
  Clock,
  Star,
  X,
  Calendar,
  Users,
  Car,
  Filter
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface BookingModalProps {
  spot: any;
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ spot, isOpen, onClose }: BookingModalProps) {
  const [duration, setDuration] = useState(1);
  const [startTime, setStartTime] = useState('');
  const [vehicleType, setVehicleType] = useState('car');

  if (!spot) return null;

  const totalPrice = spot.type === 'free' ? 0 : spot.price * duration;

  const handleBooking = () => {
    // Demo booking logic
    alert(`🎉 Booking confirmed!\n\nSpot: ${spot.name}\nDuration: ${duration} ${spot.priceType === 'hourly' ? 'hour(s)' : 'day(s)'}\nTotal: ₹${totalPrice}\n\nThank you for using ParkEasy!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Book Parking</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{spot.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{spot.address}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Duration ({spot.priceType})
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {spot.priceType === 'hourly' ? 'hour' : 'day'}{i + 1 > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Vehicle Type
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                >
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="truck">Truck</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Time
              </label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal:</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Service Fee:</span>
                <span className="font-semibold">₹{Math.round(totalPrice * 0.05)}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-slate-600 pt-2 flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                <span className="font-bold text-lg text-blue-600">₹{totalPrice + Math.round(totalPrice * 0.05)}</span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full py-3 bg-linear-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function FindParking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    rating: 1,
    features: [] as string[],
  });
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>(['Connaught Place', 'DLF Mall', 'IGI Airport']);
  const [showFilters, setShowFilters] = useState(false);
  const [bookingSpot, setBookingSpot] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState('');

  // Get user's location (demo)
  useEffect(() => {
    setCurrentLocation('New Delhi, India');
  }, []);

  // Filter and sort parking spots
  const filteredAndSortedSpots = useMemo(() => {
    let filtered = PARKING_SPOTS.filter((spot) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          spot.name.toLowerCase().includes(query) ||
          spot.address.toLowerCase().includes(query) ||
          spot.features.some(feature => feature.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Type filter
      if (filters.type !== 'all' && spot.type !== filters.type) return false;

      // Price range filter
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'low' && spot.price > 100) return false;
        if (filters.priceRange === 'mid' && (spot.price < 100 || spot.price > 300)) return false;
        if (filters.priceRange === 'high' && spot.price < 300) return false;
      }

      // Rating filter
      if (spot.rating < filters.rating) return false;

      // Features filter
      if (filters.features.length > 0) {
        const hasAllFeatures = filters.features.every(feature =>
          spot.features.some(spotFeature =>
            spotFeature.toLowerCase().includes(feature.toLowerCase())
          )
        );
        if (!hasAllFeatures) return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'distance':
          return a.id - b.id; // Demo: sort by ID as distance proxy
        case 'availability':
          return (b.available / b.total) - (a.available / a.total);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev.slice(0, 4)]);
    }
  };

  const toggleFavorite = (spotId: number) => {
    setFavorites(prev =>
      prev.includes(spotId)
        ? prev.filter(id => id !== spotId)
        : [...prev, spotId]
    );
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      priceRange: 'all',
      rating: 1,
      features: [],
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Search */}
      <section className="bg-linear-to-r from-blue-600 to-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold mb-4">Find Parking</h1>
            <p className="text-white/90 mb-8">
              Search for available parking near you • {filteredAndSortedSpots.length} spots found
            </p>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="flex gap-2 bg-white dark:bg-slate-800 rounded-lg p-2">
                <MapPin size={24} className="text-gray-400 shrink-0 my-auto ml-2" />
                <input
                  type="text"
                  placeholder="Search by location, area, or parking name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 outline-none text-gray-900 dark:text-white bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={() => handleSearch(searchQuery)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Quick Search Suggestions */}
              <div className="flex flex-wrap gap-2">
                {recentSearches.slice(0, 4).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-blue-200/20 dark:border-blue-900/20 sticky top-24">
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={20} className="text-blue-600" />
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">Filters</h3>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Parking Type */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Type</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Types' },
                        { value: 'free', label: 'Free Parking' },
                        { value: 'paid', label: 'Paid Parking' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value={option.value}
                            checked={filters.type === option.value}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Price Range</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'Any Price' },
                        { value: 'low', label: 'Under ₹100' },
                        { value: 'mid', label: '₹100 - ₹300' },
                        { value: 'high', label: 'Above ₹300' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="price"
                            value={option.value}
                            checked={filters.priceRange === option.value}
                            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Minimum Rating</h4>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.5"
                      value={filters.rating}
                      onChange={(e) => setFilters({ ...filters, rating: parseFloat(e.target.value) })}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {filters.rating} stars and above
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
                    <div className="space-y-2">
                      {['CCTV', 'Verified', 'Covered', 'Valet'].map((feature) => (
                        <label key={feature} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.features.includes(feature)}
                            onChange={(e) => {
                              setFilters({
                                ...filters,
                                features: e.target.checked
                                  ? [...filters.features, feature]
                                  : filters.features.filter(f => f !== feature)
                              });
                            }}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SortAsc size={20} className="text-gray-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="distance">Nearest First</option>
                      <option value="availability">Most Available</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                    >
                      <List size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('map')}
                      className={`p-2 rounded-lg ${viewMode === 'map' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                    >
                      <Map size={20} />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredAndSortedSpots.length} parking spots found
                </div>
              </div>

              {/* Results Grid */}
              {viewMode === 'list' ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredAndSortedSpots.filter(spot => spot).map((spot) => (
                    <div key={spot.id} className="relative">
                      <ParkingCard spot={spot} onBook={() => setBookingSpot(spot)} />
                      <button
                        onClick={() => toggleFavorite(spot.id)}
                        className={`absolute top-4 right-4 p-2 rounded-full ${
                          favorites.includes(spot.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/80 text-gray-600 hover:text-red-500'
                        } transition-colors`}
                      >
                        <Heart size={16} fill={favorites.includes(spot.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-blue-200/20 dark:border-blue-900/20">
                  <div className="text-center">
                    <Map size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Map View Coming Soon</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Interactive map with real-time parking availability
                    </p>
                    <button
                      onClick={() => setViewMode('list')}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Switch to List View
                    </button>
                  </div>
                </div>
              )}

              {filteredAndSortedSpots.length === 0 && (
                <div className="text-center py-12">
                  <Car size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No parking spots found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        spot={bookingSpot}
        isOpen={!!bookingSpot}
        onClose={() => setBookingSpot(null)}
      />
    </div>
  );
}
