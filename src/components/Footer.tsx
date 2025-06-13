
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-beige py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-luxury font-bold text-luxury-black mb-6">
              FOR A BETTER TOMORROW
            </h2>
            <p className="text-luxury-gray leading-relaxed max-w-lg">
              Create Your Fashion for a Better Tomorrow: Where Sustainability Meets Style, 
              and Every Choice Shapes the Future.
            </p>
          </div>

          {/* Right Column - FAQ */}
          <div className="space-y-4">
            <div className="border-b border-luxury-brown/20 pb-4">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-luxury-black">HOW DO I KNOW MY ORDER HAS BEEN CONFIRMED?</span>
                <ChevronDown size={20} className="text-luxury-gray" />
              </button>
            </div>
            <div className="border-b border-luxury-brown/20 pb-4">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-luxury-black">HOW CAN I TRACK MY ORDER?</span>
                <ChevronDown size={20} className="text-luxury-gray" />
              </button>
            </div>
            <div className="border-b border-luxury-brown/20 pb-4">
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-medium text-luxury-black">DO YOU OFFER CASH ON DELIVERY & PREPAID ORDERS</span>
                <ChevronDown size={20} className="text-luxury-gray" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-luxury-black mb-4">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm text-luxury-gray">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Easy Return & Exchanges</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Return & Exchange Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-medium text-luxury-black mb-4">ABOUT</h3>
            <p className="text-sm text-luxury-gray leading-relaxed">
              At Gem Stone, we believe that fashion is more than just clothing; it's an expression of 
              individuality, creativity, and confidence. We are not just a fashion brand; we are a 
              celebration of your unique style.
            </p>
          </div>

          {/* Exclusive Benefits */}
          <div>
            <h3 className="font-medium text-luxury-black mb-4">EXCLUSIVE BENEFITS</h3>
            <p className="text-sm text-luxury-gray mb-4">
              Apply for our free membership to receive exclusive deals, news, and events.
            </p>
            <div className="flex">
              <Input 
                placeholder="Email" 
                className="rounded-r-none border-luxury-brown/30 focus:border-luxury-gold"
              />
              <Button 
                size="sm" 
                className="rounded-l-none bg-luxury-black hover:bg-luxury-brown"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-luxury-black mb-4">COMPANY</h3>
            <ul className="space-y-3 text-sm text-luxury-gray">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Want to Collaborate with Us ?</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-luxury-brown/20 mt-12 pt-8 text-center">
          <p className="text-sm text-luxury-gray">
            © 2024 Gem Stone. All rights reserved. Designed with luxury in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
