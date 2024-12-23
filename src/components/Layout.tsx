import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './navigation/BottomNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}