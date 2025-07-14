

import React from 'react';
import { Play, Package, Users, ShoppingBag, Smartphone } from 'lucide-react';
import deliever from '../../../public/deliever.jpg';
import instagramreel from '../../../public/instagramreel.jpg';
import women from '../../../public/women.jpg';

function Page6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Video-First Discovery
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={deliever}
              alt="delivery"
              className="w-full max-w-sm rounded-xl object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={instagramreel}
              alt="instagram reel"
              className="w-full max-w-sm rounded-xl object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={women}
              alt="woman"
              className="w-full max-w-sm rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
            Shop through engaging reels and influencer content. No more boring product grids — discover fashion the way Gen Z loves it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page6;
