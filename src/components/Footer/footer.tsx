import { denkOne } from '@/app/font';
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className={denkOne.className}>
    <footer className="bg-purple-600 rounded-xl mt-8 text-white p-6 px-16">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" /> +9193XXXXXXXX
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" /> xyz@gmail.com
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram" className="text-2xl"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-2xl"><FaLinkedin /></a>
            <a href="#" aria-label="WhatsApp" className="text-2xl"><FaWhatsapp /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Find your way</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Get Help</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Newsletter</a></li>
          </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter:</h3>
            <form action="#" method="POST">
                <input type="email" placeholder="Enter your email" className="w-full p-2 text-black rounded-lg outline-none" />
                <button type="submit" className="bg-white text-purple-600 p-2 rounded-lg hover:bg-black mt-2">Subscribe</button>
            </form>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
