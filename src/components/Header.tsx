'use client';
import React  from 'react';
import Link from 'next/link';
import StreamingButton from './StreamingButton';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-80">
              About
            </Link>
            <Link href="/blog" className="hover:opacity-80">
              Blog
            </Link>
            <Link href="/pages" className="hover:opacity-80">
              Pages
            </Link>
          </div>

          {/* Center section with cross and Worship text */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">†</span>
            <Link href="/" className="text-xl font-semibold">
              Worship
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <Link href="/events" className="hover:opacity-80">
              Events
            </Link>
            <Link href="/schedule" className="hover:opacity-80">
              Schedule
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
            <StreamingButton />
            <Link href="/cart" className="hover:opacity-80">
              Cart(3)
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;