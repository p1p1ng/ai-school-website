// src/pages/About.jsx

import { motion } from 'framer-motion';
import { FaFlag, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-primary text-white py-24">
        <div className="container mx-auto text-center px-4">
          <motion.h1 
            className="text-5xl font-poppins font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tentang Inisiatif AI Kami
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Membangun fondasi pendidikan masa depan melalui inovasi dan teknologi.
          </motion.p>
        </div>
      </header>

      {/* Visi & Misi */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-poppins font-bold mb-4">Visi & Misi</h2>
            <div className="flex items-start mb-6">
              <FaFlag className="text-secondary text-4xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold font-poppins">Visi</h3>
                <p className="text-gray-600">Menjadi sekolah pionir dalam pemanfaatan AI dan Big Data untuk menciptakan lingkungan belajar yang adaptif, inklusif, dan berorientasi pada masa depan.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaRocket className="text-secondary text-4xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold font-poppins">Misi</h3>
                <p className="text-gray-600">Mengintegrasikan teknologi cerdas secara etis untuk personalisasi pembelajaran, meningkatkan efisiensi operasional, dan membekali siswa dengan keterampilan abad ke-21.</p>
              </div>
            </div>
          </div>
          <div>
            {/* Placeholder untuk ilustrasi atau gambar */}
            <img src="https://via.placeholder.com/500x350" alt="Visi dan Misi" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.img 
            src="https://via.placeholder.com/250" 
            alt="Kepala Sekolah" 
            className="w-48 h-48 rounded-full shadow-lg object-cover"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-poppins font-bold">Sambutan Kepala Sekolah</h2>
            <p className="mt-4 text-gray-700 italic">
              "Kami percaya bahwa teknologi bukanlah pengganti guru, melainkan partner terbaik bagi guru dalam membentuk generasi penerus yang cemerlang. Inisiatif AI ini adalah langkah berani kami untuk masa depan anak-anak kita."
            </p>
            <p className="mt-4 font-bold font-poppins">Dr. Budi Setiawan, M.Pd.</p>
            <p className="text-sm text-gray-500">Kepala Sekolah</p>
          </div>
        </div>
      </section>

      {/* Kenapa AI & Big Data? */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-poppins font-bold mb-10">Kenapa AI & Big Data di Sekolah?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <FaUsers className="text-primary text-5xl mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Pembelajaran Personal</h3>
              <p className="text-gray-600">Setiap siswa unik. AI membantu kami menyusun kurikulum yang sesuai dengan kecepatan dan gaya belajar masing-masing siswa.</p>
            </div>
            <div className="p-6">
               <FaRocket className="text-primary text-5xl mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Keputusan Terinformasi</h3>
              <p className="text-gray-600">Big Data memberikan wawasan mendalam tentang tren akademik dan operasional, membantu manajemen mengambil keputusan yang lebih baik.</p>
            </div>
            <div className="p-6">
               <FaFlag className="text-primary text-5xl mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Efisiensi Manajemen</h3>
              <p className="text-gray-600">Otomatisasi tugas-tugas administratif membebaskan waktu guru untuk lebih fokus pada pengajaran dan interaksi dengan siswa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;