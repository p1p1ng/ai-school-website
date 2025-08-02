// src/pages/Home.jsx

import { motion } from 'framer-motion';
import { FaArrowRight, FaUserCheck, FaDatabase, FaChartLine, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi

// Placeholder untuk gambar, ganti dengan aset Anda
import heroImage from '../assets/hero-image.png'; // Contoh: simpan gambar di src/assets/hero-image.png
import illustrationImage from '../assets/ai-classroom.png'; // Contoh: simpan gambar di src/assets/ai-classroom.png

const Home = () => {
  // Animasi untuk Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-blue-50 overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-gray-900 leading-tight">
              Masa Depan Sekolah <span className="text-primary">Dimulai Hari Ini</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Mengoptimalkan Artificial Intelligence dan Big Data untuk menciptakan pengalaman belajar yang luar biasa.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/fitur" 
                className="mt-8 bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300 inline-flex items-center text-lg"
              >
                Lihat Bagaimana Kami Menggunakan AI <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Ganti 'heroImage' dengan path gambar Anda */}
            <img src="https://via.placeholder.com/600x400.png?text=Ilustrasi+Siswa+dan+Guru" alt="AI in Education" className="rounded-lg shadow-2xl mx-auto" />
             {/* Icon AI sebagai elemen dekoratif */}
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg">
                <FaDatabase className="text-primary text-4xl" />
            </div>
             <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg">
                <FaChartLine className="text-secondary text-4xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Statistik Real-time */}
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-2">Dampak Nyata Teknologi Kami</h2>
          <p className="text-gray-500 mb-12">Data yang berbicara tentang keberhasilan implementasi kami.</p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="p-8 bg-gray-100 rounded-lg shadow-md" variants={itemVariants}>
              <FaUserCheck className="text-secondary text-5xl mx-auto mb-4" />
              <p className="text-5xl font-bold text-gray-800">1,200+</p>
              <p className="mt-2 text-gray-600 font-semibold text-lg">Murid Terbantu AI</p>
            </motion.div>
            <motion.div className="p-8 bg-gray-100 rounded-lg shadow-md" variants={itemVariants}>
              <FaDatabase className="text-primary text-5xl mx-auto mb-4" />
              <p className="text-5xl font-bold text-gray-800">5 Juta+</p>
              <p className="mt-2 text-gray-600 font-semibold text-lg">Data Dianalisis</p>
            </motion.div>
            <motion.div className="p-8 bg-gray-100 rounded-lg shadow-md" variants={itemVariants}>
              <FaChartLine className="text-accent text-5xl mx-auto mb-4" />
              <p className="text-5xl font-bold text-gray-800">98%</p>
              <p className="mt-2 text-gray-600 font-semibold text-lg">Akurasi Prediksi Minat</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* 3. Video Pendek / Ilustrasi Animasi */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div 
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ganti 'illustrationImage' dengan path gambar Anda */}
            <img src="https://via.placeholder.com/550x350.png?text=Animasi+AI+di+Kelas" alt="AI in classroom" className="rounded-lg shadow-xl w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-50">
              <FaPlayCircle className="text-white text-7xl opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">AI Beraksi di Ruang Kelas</h2>
            <p className="text-gray-600 mb-6">
              Lihat bagaimana teknologi AI kami secara aktif membantu guru dalam memberikan materi, mempersonalisasi latihan, dan menciptakan suasana belajar yang lebih dinamis dan menyenangkan.
            </p>
            <Link to="/tentang" className="text-primary font-bold hover:underline inline-flex items-center">
              Pelajari Transformasi Digital Kami <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;