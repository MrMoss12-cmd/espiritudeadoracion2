export default function Footer() {
  return (
    <footer className="bg-[#342E1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl">†</span>
              <span className="text-xl font-semibold">Worship</span>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  f
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  t
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  in
                </div>
              </a>
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PAGES</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:opacity-80">Home V1</a></li>
              <li><a href="/" className="hover:opacity-80">Home V2</a></li>
              <li><a href="/" className="hover:opacity-80">Home V3</a></li>
              <li><a href="/about" className="hover:opacity-80">About</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog V1</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog V2</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog V3</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog Post</a></li>
              <li><a href="/shop" className="hover:opacity-80">Shop</a></li>
              <li><a href="/shop" className="hover:opacity-80">Single Product</a></li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">UTILITY PAGES</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="hover:opacity-80">Events</a></li>
              <li><a href="/donations" className="hover:opacity-80">Donations</a></li>
              <li><a href="/schedule" className="hover:opacity-80">Schedule</a></li>
              <li><a href="/ministries" className="hover:opacity-80">Ministries</a></li>
              <li><a href="/404" className="hover:opacity-80">404 Not Found</a></li>
              <li><a href="/password" className="hover:opacity-80">Password Protected</a></li>
              <li><a href="/licenses" className="hover:opacity-80">Licenses</a></li>
              <li><a href="/changelog" className="hover:opacity-80">Changelog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm opacity-60">
          <p>Copyright © Worship | Designed by BIT Templates - Powered by WebFlow</p>
        </div>
      </div>
    </footer>
  );
}