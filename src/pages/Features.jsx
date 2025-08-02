// src/pages/Features.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allFeaturesData from '../data/featuresInfo.js';
import * as Icons from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-poppins font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fitur Cerdas Kami
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Jelajahi setiap inovasi yang kami terapkan untuk pendidikan yang lebih baik.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeaturesData.map((feature) => {
            const IconComponent = Icons[feature.iconName];
            return (
              <Link to={`/fitur/${feature.slug}`} key={feature.slug}>
                {/* layoutId adalah kunci untuk shared animation */}
                <motion.div
                  layoutId={`feature-card-${feature.slug}`}
                  className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col items-center text-center cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    layoutId={`feature-icon-${feature.slug}`}
                    className="text-primary text-6xl mb-4"
                  >
                    {IconComponent && <IconComponent />}
                  </motion.div>
                  <motion.h3 
                    layoutId={`feature-title-${feature.slug}`}
                    className="text-2xl font-poppins font-bold text-gray-800 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                     layoutId={`feature-desc-${feature.slug}`}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
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