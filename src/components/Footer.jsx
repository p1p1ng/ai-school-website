// src/components/Footer.jsx

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">SekolahAI</h3>
            <p className="text-gray-400">Membentuk masa depan pendidikan melalui teknologi cerdas.</p>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="/fitur" className="hover:text-primary transition-colors">Fitur AI</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/kontak" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="text-2xl hover:text-primary transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-primary transition-colors"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-primary transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-primary transition-colors"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SekolahAI. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;