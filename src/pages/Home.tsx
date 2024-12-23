import React from 'react';
import { Header } from '../components/header/Header';
import { CategoryList } from '../components/categories/CategoryList';
import { ServiceList } from '../components/services/ServiceList';

export default function Home() {
  return (
    <div className="pb-24">
      <Header />
      
      <div className="mt-16 px-4 space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-secondary">Categories</h2>
            <button className="text-sm text-primary font-medium">See All</button>
          </div>
          <CategoryList />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-secondary">Popular Services</h2>
            <button className="text-sm text-primary font-medium">See All</button>
          </div>
          <ServiceList />
        </div>
      </div>
    </div>
  );
}