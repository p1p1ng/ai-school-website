// src/pages/FeatureDetailPage.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import allFeaturesData from '../data/featuresInfo.js';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCogs, FaBrain, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// Komponen visualisasi tidak berubah
const DynamicVisualization = ({ viz }) => {
  switch (viz.type) { case 'radar_chart': return (<ResponsiveContainer width="100%" height={300}><RadarChart cx="50%" cy="50%" outerRadius="80%" data={viz.data}><PolarGrid /><PolarAngleAxis dataKey="subject" /><PolarRadiusAxis angle={30} domain={[0, 100]} /><Radar name="Skor" dataKey="score" stroke="#FF9800" fill="#FF9800" fillOpacity={0.6} /><Tooltip /></RadarChart></ResponsiveContainer>); case 'bar_chart': return (<ResponsiveContainer width="100%" height={300}><BarChart data={viz.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="subject" /><YAxis /><Tooltip /><Legend /><Bar dataKey="Prediksi Nilai" fill="#2196F3" /></BarChart></ResponsiveContainer>); case 'live_log': return (<div className="bg-gray-800 text-white font-mono p-4 rounded-lg text-sm h-[300px] overflow-y-auto"><p className="text-green-400">&gt; Memulai sistem log real-time...</p>{viz.data.map((log, index) => (<p key={index}><span className="text-gray-500 mr-2">{log.time}</span> | <span className="text-yellow-400 mx-2">{log.student}</span></p>))}<p className="text-green-400 animate-pulse">&gt; _</p></div>); default: return <div className="text-center text-gray-500 h-[300px] flex items-center justify-center">Visualisasi data untuk fitur ini sedang dalam pengembangan.</div>; }
};

const FeatureDetailPage = () => {
  const { slug } = useParams();
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const data = allFeaturesData.find(feature => feature.slug === slug);
    setFeatureData(data);
  }, [slug]);

  if (!featureData) {
    return <div className="h-screen flex items-center justify-center">Memuat fitur...</div>;
  }

  const { title, description, details, iconName } = featureData;
  const IconComponent = Icons[iconName];

  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header yang beranimasi */}
        <motion.div 
          layoutId={`feature-card-${slug}`} 
          className="bg-white rounded-xl shadow-lg p-8 mb-10 text-center"
        >
          <motion.div 
            layoutId={`feature-icon-${slug}`}
            className="text-primary text-6xl mb-4 mx-auto"
          >
            {IconComponent && <IconComponent />}
          </motion.div>
          <motion.h1 
            layoutId={`feature-title-${slug}`}
            className="text-4xl font-poppins font-bold"
          >
            {title}
          </motion.h1>
           <motion.p 
            layoutId={`feature-desc-${slug}`}
            className="text-gray-600 text-lg mt-2"
           >
            {details.longDescription}
           </motion.p>
        </motion.div>

        {/* Konten dengan animasi fade-in */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-poppins font-bold text-xl mb-3 flex items-center"><FaCogs className="mr-2 text-primary"/>Cara Kerja</h3>
              <ul className="space-y-3 text-gray-700">
                {details.howItWorks.map((step, i) => <li key={i} className="flex items-start"><FaCheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" /><span>{step}</span></li>)}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-poppins font-bold text-xl mb-3 flex items-center"><FaLightbulb className="mr-2 text-primary"/>Teknologi</h3>
              <div className="flex flex-wrap gap-2">{details.techStack.map((tech, i) => <span key={i} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>)}</div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-poppins font-bold text-xl mb-3">Hasil Analisis</h3>
              <DynamicVisualization viz={details.visualization} />
            </div>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg">
              <h3 className="font-poppins font-bold flex items-center mb-2"><FaBrain className="mr-2"/>Wawasan dari AI</h3>
              <p>{details.aiInsight}</p>
            </div>
          </div>
        </motion.div>
         <div className="text-center mt-12">
            <Link to="/fitur" className="text-primary font-semibold inline-flex items-center hover:underline">
              <FaArrowLeft className="mr-2" />
              Kembali ke Semua Fitur
            </Link>
         </div>
      </div>
    </div>
  );
};

export default FeatureDetailPage;