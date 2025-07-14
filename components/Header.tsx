import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeStyle = {
    color: '#FFFFFF',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          <NavLink to="/" className="text-2xl font-bebas tracking-widest text-white hover:text-gray-300 transition-colors">
            BKZ
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className="text-gray-400 hover:text-white transition-colors"
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              MANIFESTO
            </NavLink>
            <NavLink 
              to="/projetos" 
              className="text-gray-400 hover:text-white transition-colors"
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              PROJETOS
            </NavLink>
            <NavLink 
              to="/reflexoes" 
              className="text-gray-400 hover:text-white transition-colors"
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              REFLEXÕES
            </NavLink>
            <NavLink 
              to="/contato" 
              className="text-gray-400 hover:text-white transition-colors"
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              CONTATO
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
