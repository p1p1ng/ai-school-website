// src/pages/Features.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allFeaturesData from '../data/featuresInfo.js'; // <-- PERUBAHAN: Import default (tanpa kurung kurawal)
import * as Icons from 'react-icons/fa'; // <-- Import semua ikon dari Font Awesome

const Features = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-poppins font-bold">Fitur Cerdas Kami</h1>
          <p className="text-lg text-gray-600 mt-2">Jelajahi setiap inovasi yang kami terapkan untuk pendidikan yang lebih baik.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeaturesData.map((feature, index) => {
            const IconComponent = Icons[feature.iconName]; // <-- Ambil komponen ikon secara dinamis
            return (
              <Link to={`/fitur/${feature.slug}`} key={feature.slug}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary text-6xl mb-4">
                    {IconComponent && <IconComponent />} {/* <-- Render ikon */}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;