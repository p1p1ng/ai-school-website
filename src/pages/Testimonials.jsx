// src/pages/Testimonials.jsx

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: 'Rina Wijayanti', role: 'Guru Matematika', text: 'Sistem analisis AI sangat membantu saya mengidentifikasi siswa yang butuh perhatian lebih. Waktu saya jadi lebih efisien!', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Andi Pratama', role: 'Siswa Kelas 12', text: 'Rekomendasi jurusan dari AI benar-benar membuka mata saya. Sekarang saya lebih yakin dengan pilihan studi saya.', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Ibu Siti', role: 'Orang Tua Murid', text: 'Dashboard orang tua sangat informatif. Saya bisa memantau perkembangan anak saya kapan saja dengan mudah.', avatar: 'https://i.pravatar.cc/150?img=3' },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-poppins font-bold">Testimoni & Studi Kasus</h1>
          <p className="text-lg text-gray-600 mt-2">Dengarkan apa kata mereka tentang inovasi kami.</p>
        </div>

        {/* Carousel Testimoni */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-accent text-3xl mx-auto mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
              <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary" />
              <h4 className="font-poppins font-bold text-lg">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;