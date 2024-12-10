import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>© {new Date().getFullYear()} VirtualWork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;