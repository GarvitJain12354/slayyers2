

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Logo */}
        <img src="/SlayyersFooter.png" alt="Slayyers Footer" className=" w-56 md:w-full" />

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Ready to Turn Your Fashion Passion into Profit?
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Join hundreds of creators who are already earning through Slayyers. 
              With our unique 60-minute delivery promise and engaged fashion-conscious audience, 
              you'll see higher conversion rates and better earnings than traditional affiliate marketing.
            </p>
          </div>

          {/* App Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a href="/coming-soon">
              <img src="/google1.png" alt="Get it on Google Play" className="h-10 sm:h-12 object-contain" />
            </a>
            <a href="/coming-soon">
              <img src="/app1.png" alt="Download on the App Store" className="h-10 sm:h-12 object-contain" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className=" hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 pt-10 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/coming-soon">About</a></li>
              <li><a href="/coming-soon">Features</a></li>
              <li><a href="/coming-soon">Works</a></li>
              <li><a href="/coming-soon">Career</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/coming-soon">Customer Support</a></li>
              <li><a href="/coming-soon">Delivery Details</a></li>
              <li><a href="/coming-soon">Terms & Conditions</a></li>
              <li><a href="/coming-soon">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/coming-soon">Free eBooks</a></li>
              <li><a href="/coming-soon">Development Tutorial</a></li>
              <li><a href="/coming-soon">How to - Blog</a></li>
              <li><a href="/coming-soon">YouTube Playlist</a></li>
            </ul>
          </div>

          {/* Install App */}
          <div>
            <h3 className="font-semibold mb-2">Install App</h3>
            <div className="flex flex-col gap-2">
              <img src="/app2.png" alt="App Store" className="h-10 object-contain" />
              <img src="/google2.png" alt="Google Play" className="h-10 object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p className="text-center sm:text-left">
            © 2025 Binary Threads. All rights reserved.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#"><i className="ri-instagram-fill" /></a>
            <a href="#"><i className="ri-twitter-x-fill" /></a>
            <a href="#"><i className="ri-facebook-fill" /></a>
            <a href="#"><i className="ri-youtube-fill" /></a>
            <a href="#"><i className="ri-tiktok-fill" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
