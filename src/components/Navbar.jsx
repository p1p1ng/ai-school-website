// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { title: 'Beranda', path: '/' },
    { title: 'Tentang', path: '/tentang' },
    { title: 'Fitur AI', path: '/fitur' },
    { title: 'Laporan', path: '/laporan' },
    { title: 'Blog', path: '/blog' },
    { title: 'Testimoni', path: '/testimoni' },
    { title: 'Kontak', path: '/kontak' },
  ];

  return (
    <nav className="bg-light/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-poppins font-bold text-primary">
          SekolahAI
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.path} className="text-gray-600 hover:text-primary font-medium transition-colors">
              {link.title}
            </Link>
          ))}
           {/* Tombol Dashboard ditambahkan di sini */}
          <Link to="/dashboard" className="bg-primary text-black font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
            Dashboard Siswa
          </Link>
          {/* Tombol Portal Orang Tua ditambahkan di sini */}
          <Link to="/ortu/analytics" className="bg-secondary text-black font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
            Portal Orang Tua
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.path} className="block py-2 text-gray-600 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              {link.title}
            </Link>
          ))}
           {/* Tombol Dashboard untuk tampilan mobile */}
          <Link to="/dashboard" className="mt-2 w-full text-center bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors block" onClick={() => setIsOpen(false)}>
            Dashboard Siswa
          </Link>
          <Link to="/ortu/analytics" className="mt-2 w-full text-center bg-secondary text-white font-semibold py-2 px-4 rounded-full block" onClick={() => setIsOpen(false)}>
            Portal Orang Tua
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;