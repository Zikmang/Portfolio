import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 mt-12 bg-gray-900">
      <div className="py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          &copy; zikmang lekmang {currentYear} 
        </p>
        
        <button 
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="text-gray-400 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
        >
          <span>Back to Top</span>
          <span 
            className="transform group-hover:-translate-y-1 transition-transform duration-300 inline-block"
            aria-hidden="true"
          >
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;