// src/pages/Blog.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';

// Data dummy untuk artikel blog
const articles = [
  { id: 1, title: 'Peran AI dalam Meningkatkan Minat Belajar', category: 'AI', image: 'https://via.placeholder.com/400x250', excerpt: 'Kecerdasan buatan membuka pintu baru untuk metode belajar yang lebih interaktif dan menarik bagi siswa...' },
  { id: 2, title: 'Bagaimana Big Data Membantu Guru Mengajar', category: 'Big Data', image: 'https://via.placeholder.com/400x250', excerpt: 'Dengan analisis data, guru dapat memahami kebutuhan setiap siswa secara mendalam dan menyesuaikan...' },
  { id: 3, title: 'Etika AI di Lingkungan Sekolah', category: 'AI', image: 'https://via.placeholder.com/400x250', excerpt: 'Pentingnya menerapkan AI secara etis untuk melindungi privasi dan keadilan bagi seluruh civitas akademika...' },
  { id: 4, title: 'Masa Depan EduTech: Apa Selanjutnya?', category: 'EduTech', image: 'https://via.placeholder.com/400x250', excerpt: 'Tren teknologi pendidikan terus berkembang. Mari kita lihat apa yang akan datang di horizon...' },
];

const Blog = () => {
  const [filter, setFilter] = useState('All');

  const filteredArticles = filter === 'All' 
    ? articles 
    : articles.filter(article => article.category === filter);

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-poppins font-bold">Artikel & Wawasan</h1>
        <p className="text-lg text-gray-600 mt-2">Edukasi seputar teknologi di dunia pendidikan.</p>
      </div>

      {/* Filter Kategori */}
      <div className="flex justify-center gap-4 mb-12">
        <button onClick={() => setFilter('All')} className={`px-6 py-2 rounded-full font-semibold ${filter === 'All' ? 'bg-primary text-white' : 'bg-gray-200'}`}>Semua</button>
        <button onClick={() => setFilter('AI')} className={`px-6 py-2 rounded-full font-semibold ${filter === 'AI' ? 'bg-primary text-white' : 'bg-gray-200'}`}>AI</button>
        <button onClick={() => setFilter('Big Data')} className={`px-6 py-2 rounded-full font-semibold ${filter === 'Big Data' ? 'bg-primary text-white' : 'bg-gray-200'}`}>Big Data</button>
        <button onClick={() => setFilter('EduTech')} className={`px-6 py-2 rounded-full font-semibold ${filter === 'EduTech' ? 'bg-primary text-white' : 'bg-gray-200'}`}>EduTech</button>
      </div>

      {/* Daftar Artikel */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <motion.div 
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            layout
          >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm bg-secondary text-white px-3 py-1 rounded-full">{article.category}</span>
              <h3 className="text-xl font-poppins font-bold mt-4 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
              <a href="#" className="text-accent font-bold hover:underline">Baca Selengkapnya</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;