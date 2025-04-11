import React from 'react'
import { FaTwitterSquare,FaLinkedin,FaPinterestSquare,FaInstagram,FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & App Links */}
          <div className="flex flex-col gap-4">
            <div className="text-orange-500 font-bold text-2xl">Swiggy</div>
            <div className="text-sm">© 2025 Swiggy Limited</div>
            <div className="flex gap-2 mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Dineout</li>
                <li>Swiggy Genie</li>
                <li>Minis</li>
                <li>Pyng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact us</h4>
              <ul className="space-y-1">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Available in:</h4>
              <ul className="space-y-1">
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>
                  <select className="mt-1 border text-sm px-2 py-1 rounded">
                    <option>679 cities</option>
                  </select>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Life at Swiggy</h4>
              <ul className="space-y-1">
                <li>Explore with Swiggy</li>
                <li>Swiggy News</li>
                <li>Snackables</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Legal</h4>
              <ul className="space-y-1">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-4 text-lg text-gray-600">
          <a href="#" className="hover:text-black">
          <FaLinkedin />
          </a>
          <a href="#" className="hover:text-black">
          <FaInstagram />
          </a>
          <a href="#" className="hover:text-black">
          <FaFacebook />
          </a>
          <a href="#" className="hover:text-black">
          <FaPinterestSquare />
          </a>
          <a href="#" className="hover:text-black">
          <FaTwitterSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}