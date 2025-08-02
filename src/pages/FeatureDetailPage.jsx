// src/pages/FeatureDetailPage.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import allFeaturesData from '../data/featuresInfo.js'; // <-- PERUBAHAN: Import default
import { FaArrowLeft, FaCogs, FaBrain, FaLightbulb } from 'react-icons/fa';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DynamicVisualization = ({ viz }) => {
  // ... (kode komponen ini tidak berubah, bisa disalin dari kode sebelumnya)
  switch (viz.type) { case 'radar_chart': return (<ResponsiveContainer width="100%" height={300}><RadarChart cx="50%" cy="50%" outerRadius="80%" data={viz.data}><PolarGrid /><PolarAngleAxis dataKey="subject" /><PolarRadiusAxis angle={30} domain={[0, 100]} /><Radar name="Skor" dataKey="score" stroke="#FF9800" fill="#FF9800" fillOpacity={0.6} /><Tooltip /></RadarChart></ResponsiveContainer>); case 'bar_chart': return (<ResponsiveContainer width="100%" height={300}><BarChart data={viz.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="subject" /><YAxis /><Tooltip /><Legend /><Bar dataKey="Prediksi Nilai" fill="#2196F3" /></BarChart></ResponsiveContainer>); case 'live_log': return (<div className="bg-gray-800 text-white font-mono p-4 rounded-lg text-sm h-[300px] overflow-y-auto"><p className="text-green-400">&gt; Memulai sistem log real-time...</p>{viz.data.map((log, index) => (<p key={index}><span className="text-gray-500 mr-2">{log.time}</span> | <span className="text-yellow-400 mx-2">{log.student}</span></p>))}<p className="text-green-400 animate-pulse">&gt; _</p></div>); default: return <div className="text-center text-gray-500 h-[300px] flex items-center justify-center">Visualisasi data untuk fitur ini sedang dalam pengembangan.</div>; }
};

const FeatureDetailPage = () => {
  const { slug } = useParams();
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    // Gunakan .find() untuk mencari data yang cocok berdasarkan slug
    const data = allFeaturesData.find(feature => feature.slug === slug);
    setFeatureData(data);
  }, [slug]);

  if (!featureData) {
    return (
        <div className="text-center py-40">
            <h2 className="text-2xl font-bold text-red-500">Fitur Tidak Ditemukan</h2>
            <p className="text-gray-600 mt-2">Silakan periksa kembali URL atau kembali ke halaman fitur.</p>
            <Link to="/fitur" className="text-white bg-primary font-semibold inline-flex items-center mt-6 px-6 py-2 rounded-lg"><FaArrowLeft className="mr-2" />Kembali</Link>
        </div>
    );
  }

  const { title, details } = featureData;

  return (
    <motion.div className="bg-gray-50 min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/fitur" className="text-primary font-semibold inline-flex items-center mb-6 hover:underline"><FaArrowLeft className="mr-2" />Kembali ke Semua Fitur</Link>
          
          <div>
            <h1 className="text-4xl font-poppins font-bold mb-2">{title}</h1>
            <p className="text-lg text-gray-600">{details.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="md:col-span-1 space-y-8">
              <div><h3 className="font-poppins font-bold text-xl mb-3 flex items-center"><FaCogs className="mr-2 text-primary"/>Cara Kerja</h3><ul className="list-decimal list-inside space-y-2 text-gray-700">{details.howItWorks.map((step, i) => <li key={i}>{step}</li>)}</ul></div>
              <div><h3 className="font-poppins font-bold text-xl mb-3 flex items-center"><FaLightbulb className="mr-2 text-primary"/>Teknologi</h3><div className="flex flex-wrap gap-2">{details.techStack.map((tech, i) => <span key={i} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>)}</div></div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div><h3 className="font-poppins font-bold text-xl mb-3">Hasil Analisis</h3><div className="bg-white p-4 rounded-lg shadow-md"><DynamicVisualization viz={details.visualization} /></div></div>
              <div><h3 className="font-poppins font-bold text-xl mb-3 flex items-center"><FaBrain className="mr-2 text-accent"/>Wawasan dari AI</h3><div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg"><p>{details.aiInsight}</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureDetailPage;