// src/pages/Reports.jsx

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data dummy untuk grafik
const performanceData = [
  { name: '2021', 'Sebelum AI': 68, 'Sesudah AI': 85 },
  { name: '2022', 'Sebelum AI': 72, 'Sesudah AI': 88 },
  { name: '2023', 'Sebelum AI': 70, 'Sesudah AI': 92 },
  { name: '2024', 'Sebelum AI': 75, 'Sesudah AI': 95 },
];

const Reports = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-poppins font-bold">Laporan & Statistik</h1>
        <p className="text-lg text-gray-600 mt-2">Visualisasi data dari implementasi teknologi cerdas kami.</p>
      </div>

      {/* Grafik Performa Siswa */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-xl mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-poppins font-bold mb-6">Grafik Performa Siswa (Rata-rata Nilai)</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sebelum AI" fill="#FF9800" />
              <Bar dataKey="Sesudah AI" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Statistik Lainnya */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
          <p className="text-5xl font-bold">99.2%</p>
          <p className="mt-2 text-xl font-poppins">Tingkat Kehadiran</p>
        </div>
         <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <p className="text-5xl font-bold">-75%</p>
          <p className="mt-2 text-xl font-poppins">Penurunan Keterlambatan</p>
        </div>
        <div className="bg-accent text-white p-8 rounded-lg shadow-lg">
          <p className="text-5xl font-bold">8/10</p>
          <p className="mt-2 text-xl font-poppins">Alumni di Jurusan Pilihan</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;