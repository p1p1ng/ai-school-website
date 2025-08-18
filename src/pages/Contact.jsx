// src/pages/Contact.jsx

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaShareAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-poppins font-bold">Hubungi Kami</h1>
        <p className="text-lg text-gray-600 mt-2">Kami siap mendengar dari Anda. Mari berkolaborasi!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form Kontak */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-poppins font-bold mb-6">Kirim Pesan</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Pesan</label>
              <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors">
              Kirim
            </button>
          </form>
        </motion.div>

        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-primary text-poppins p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-poppins font-bold mb-6">Informasi Kontak</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl mr-4" />
              <p>Jl. Pendidikan No. 123, Banyuwangi, Indonesia</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-2xl mr-4" />
              <p>(021) 123-4567</p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl mr-4" />
              <p>info@driven-edu.ai</p>
            </div>
            <h3 className="text-xl font-poppins font-bold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              {/* Ganti dengan link sosial media Anda */}
              <a href="#" className="text-3xl hover:text-accent transition-colors"><FaShareAlt /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;