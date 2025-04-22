import React from 'react';
import Link from 'next/link'; // Ensure Link is imported

export default function Footer() {
  return (
    <footer className="bg-[#342E1C] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us section */}

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#FFB347]">About Us</Link></li>
            <li><Link href="/" className="hover:text-[#FFB347]">Sermons</Link></li>
            <li><Link href="/" className="hover:text-[#FFB347]">Ministries</Link></li>
            {/* Ensure these lines also use <Link> if they navigate internally */}
            <li><Link href="/" className="hover:text-[#FFB347]">Events</Link></li> {/* Example Fix for line 38 */}
            <li><Link href="/" className="hover:text-[#FFB347]">Contact Us</Link></li> {/* Example Fix for line 39 */}
            <li><Link href="/" className="hover:text-[#FFB347]">Blog</Link></li> {/* Example Fix for line 40 */}
          </ul>
        </div>

        {/* Connect With Us section */}
        {/* Subscribe section */}
      </div>
      {/* Footer bottom */}
    </footer>
  );
}