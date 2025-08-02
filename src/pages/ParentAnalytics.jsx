// src/pages/ParentAnalytics.jsx

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaUserGraduate, FaClipboardCheck, FaClock, FaBookReader, FaBrain } from 'react-icons/fa';

// --- DATA DUMMY UNTUK ANALISIS ---
const studentData = {
  name: 'Andi Pratama',
  class: 'Kelas 12 IPA 1'
};

const kpiData = [
  { title: 'Tingkat Kehadiran', value: '98%', icon: <FaClipboardCheck />, color: 'bg-primary' },
  { title: 'Rata-Rata Nilai Kuis', value: '85.5', icon: <FaUserGraduate />, color: 'bg-green-500' },
  { title: 'Waktu Belajar Aktif', value: '12 Jam/Minggu', icon: <FaClock />, color: 'bg-orange-500' },
  { title: 'Tugas Tepat Waktu', value: '100%', icon: <FaBookReader />, color: 'bg-purple-500' },
];

const scoreTrendData = [
  { week: 'Mei W1', nilai: 80 },
  { week: 'Mei W2', nilai: 82 },
  { week: 'Mei W3', nilai: 78 },
  { week: 'Mei W4', nilai: 88 },
  { week: 'Juni W1', nilai: 85 },
  { week: 'Juni W2', nilai: 90 },
];

const studyTimeData = [
  { name: 'Matematika', value: 40, color: '#2196F3' },
  { name: 'Fisika', value: 30, color: '#4CAF50' },
  { name: 'Kimia', value: 20, color: '#FF9800' },
  { name: 'Lainnya', value: 10, color: '#9E9E9E' },
];

const aiInsights = [
  "Performa Andi di Matematika menunjukkan tren positif! Pertahankan fokus pada latihan soal.",
  "Kami melihat waktu belajar untuk Kimia sedikit di bawah rata-rata. Mungkin bisa dijadwalkan sesi belajar singkat di akhir pekan?",
  "Skor kuis Fisika meningkat pesat setelah sesi tambahan. Kerja bagus, Andi!"
];

const ParentAnalytics = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">Learning Analytics</h1>
          <p className="text-gray-600">Perkembangan Belajar untuk <span className="font-bold text-primary">{studentData.name}</span> ({studentData.class})</p>
        </motion.div>

        {/* Kartu KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {kpiData.map((kpi, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <div className={`text-white text-2xl ${kpi.color} p-4 rounded-lg mr-4`}>{kpi.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{kpi.title}</p>
                <p className="text-2xl font-bold">{kpi.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grafik dan Insight */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Grafik Tren Nilai */}
          <motion.div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="font-poppins font-bold text-lg mb-4">Tren Nilai Kuis (6 Minggu Terakhir)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scoreTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nilai" stroke="#2196F3" strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Alokasi Waktu Belajar */}
          <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <h3 className="font-poppins font-bold text-lg mb-4">Alokasi Waktu Belajar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={studyTimeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {studyTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Wawasan dari AI */}
        <motion.div className="mt-8 bg-white p-6 rounded-xl shadow-md" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
           <h3 className="font-poppins font-bold text-lg mb-4 flex items-center"><FaBrain className="mr-2 text-primary" /> Wawasan dari AI Asisten</h3>
           <ul className="space-y-3 list-disc list-inside text-gray-700">
             {aiInsights.map((insight, index) => (
                <li key={index}>{insight}</li>
             ))}
           </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentAnalytics;