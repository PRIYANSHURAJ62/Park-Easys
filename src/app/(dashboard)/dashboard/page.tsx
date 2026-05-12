'use client';

import { UserDashboard } from '@/components/UserDashboard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UserDashboard />
      </div>
    </div>
  );
}
