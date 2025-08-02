// src/pages/Dashboard.jsx

import { motion } from 'framer-motion';
import { FaBookOpen, FaLightbulb, FaChartBar, FaTasks, FaTrophy } from 'react-icons/fa';

// Data dummy untuk rekomendasi belajar
const learningRecommendations = [
  {
    subject: 'Matematika',
    topic: 'Kalkulus Dasar: Turunan',
    reason: 'Berdasarkan hasil kuis terakhirmu, area ini butuh sedikit penguatan untuk meningkatkan pemahaman.',
    icon: <FaChartBar />,
    color: 'bg-blue-500',
  },
  {
    subject: 'Fisika',
    topic: 'Hukum Newton',
    reason: 'Kamu menunjukkan minat yang kuat pada topik Mekanika. Memperdalam Hukum Newton akan sangat bermanfaat.',
    icon: <FaLightbulb />,
    color: 'bg-green-500',
  },
  {
    subject: 'Bahasa Inggris',
    topic: 'Latihan Tenses',
    reason: 'Skor tata bahasamu sudah bagus! Latihan ini akan membantumu mencapai level mahir.',
    icon: <FaBookOpen />,
    color: 'bg-orange-500',
  },
];

const Dashboard = () => {
  const studentName = "Andi Pratama"; // Nama siswa dummy

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6 md:p-10">
        {/* Header Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800">
            Selamat Datang, {studentName}!
          </h1>
          <p className="text-gray-600 mt-2">Ini adalah ringkasan dan rekomendasi belajarmu hari ini.</p>
        </motion.div>

        {/* Kartu Statistik */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex items-center" whileHover={{ scale: 1.05 }}>
            <FaTasks className="text-white text-2xl bg-primary p-3 rounded-full mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Tugas Selesai</p>
              <p className="text-2xl font-bold">8 / 10</p>
            </div>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex items-center" whileHover={{ scale: 1.05 }}>
            <FaChartBar className="text-white text-2xl bg-secondary p-3 rounded-full mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Progress Belajar</p>
              <p className="text-2xl font-bold">78%</p>
            </div>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex items-center" whileHover={{ scale: 1.05 }}>
            <FaTrophy className="text-white text-2xl bg-accent p-3 rounded-full mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Peringkat Kelas</p>
              <p className="text-2xl font-bold">#5</p>
            </div>
          </motion.div>
        </div>

        {/* Bagian Rekomendasi Belajar */}
        <div className="mt-12">
          <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
            Rekomendasi Belajar Untukmu
          </h2>
          <div className="space-y-6">
            {learningRecommendations.map((rec, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }} // shadow-lg
              >
                <div className={`w-full md:w-24 h-24 md:h-auto flex items-center justify-center text-white text-4xl ${rec.color}`}>
                  {rec.icon}
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm font-bold" style={{ color: rec.color.replace('bg-', '').split('-')[0] }}>{rec.subject}</p>
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mt-1">{rec.topic}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{rec.reason}</p>
                </div>
                <div className="p-6 flex items-center">
                  <button className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors w-full md:w-auto">
                    Mulai Belajar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;