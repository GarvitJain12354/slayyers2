import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Logo and CTA */}
        <img src="/SlayyersFooter.png" alt="" />

        <div className="w-full flex items-center justify-between mt-10 ">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Turn Your Fashion Passion into Profit?
            </h2>
            <p className="max-w-xl text-sm text-gray-300 mb-6">
              Join hundreds of creators who are already earning through
              Slayyers. With our unique 60-minute delivery promise and engaged
              fashion-conscious audience, you'll see higher conversion rates and
              better earnings than traditional affiliate marketing.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#">
              <img
                src="/google1.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="/app1.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-700 pt-8 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
          {/* Install App */}
          <div>
            <h3 className="font-semibold mb-2">Install App</h3>
            <div className="flex flex-col gap-2">
              <img
                src="/app2.png"
                alt="App Store"
                className="h-10 object-contain"
              />
              <img
                src="/google2.png"
                alt="Google Play"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs">
          <p>
            © Copyright 2025, All Rights Reserved by G5 Graphics & Marketing
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#">
              <i className="ri-instagram-fill"></i>{" "}
            </a>
            <a href="#">
              <i className="ri-twitter-x-fill"></i>{" "}
            </a>
            <a href="#">
              <i className="ri-facebook-fill"></i>{" "}
            </a>
            <a href="#">
              <i className="ri-youtube-fill"></i>{" "}
            </a>
            <a href="#">
              <i className="ri-tiktok-fill"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
