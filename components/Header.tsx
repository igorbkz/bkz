import React from 'react';

const Header: React.FC = () => {

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 border-b border-gray-800">
            <a href="#" onClick={handleLogoClick} className="text-2xl font-bebas tracking-widest text-white hover:text-gray-300 transition-colors">
              bkzkkmkm
            </a>
          </div>
        </div>
      </header>
  );
};

export default Header;