import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    'text-gray-400 hover:text-white transition-colors' +
    (isActive ? ' !text-white' : '');

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    'text-3xl font-bebas py-2 ' +
    (isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white');

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 border-b border-gray-800">
            <NavLink to="/" onClick={closeMenu} className="text-2xl font-bebas tracking-widest text-white hover:text-gray-300 transition-colors">
              BKZ
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navLinkClasses}>MANIFESTO</NavLink>
              <NavLink to="/projetos" className={navLinkClasses}>A FORJA</NavLink>
              <NavLink to="/reflexoes" className={navLinkClasses}>REFLEXÕES</NavLink>
              <NavLink to="/contato" className={navLinkClasses}>CONTATO</NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu" aria-expanded={isOpen}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 12h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClasses}>MANIFESTO</NavLink>
          <NavLink to="/projetos" onClick={closeMenu} className={mobileNavLinkClasses}>A FORJA</NavLink>
          <NavLink to="/reflexoes" onClick={closeMenu} className={mobileNavLinkClasses}>REFLEXÕES</NavLink>
          <NavLink to="/contato" onClick={closeMenu} className={mobileNavLinkClasses}>CONTATO</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
