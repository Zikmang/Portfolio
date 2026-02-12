import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'WORK', path: '/' },
    { name: 'RESUME', path: '/resume' }, 
    { name: 'ABOUT ME', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsOpen(false);

  // Styles
  const desktopBaseClass = "text-sm font-semibold tracking-widest transition-all duration-300 pb-1";
  const mobileBaseClass = "block px-4 py-3 text-sm font-semibold tracking-widest rounded-lg transition-all duration-200";

  return (
    <nav className="w-full py-6 px-6 md:px-12 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-lg md:text-xl font-bold tracking-widest uppercase text-gray-900 hover:text-gray-700 transition-colors duration-300"
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${desktopBaseClass} ${
                isActive(link.path)
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-black border-b-2 border-transparent hover:border-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-2 space-y-1 border-t border-gray-100 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`${mobileBaseClass} ${
                isActive(link.path)
                  ? 'text-black bg-gray-100'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;