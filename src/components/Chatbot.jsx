// src/components/Chatbot.jsx

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Halo! Saya Asisten AI. Ada yang bisa saya bantu seputar fitur sekolah atau pelajaran?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State untuk simulasi "berpikir"

  const messagesEndRef = useRef(null);

  // Fungsi untuk auto-scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // =======================================================================
  // "OTAK" DUMMY CHATBOT - SEMUA LOGIKA ADA DI SINI
  // =======================================================================
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('matematika') || input.includes('kalkulus')) {
      return 'Tentu! Matematika adalah studi tentang angka dan struktur. Di sekolah kita, fokusnya pada pemecahan masalah melalui Aljabar dan Kalkulus untuk persiapan kuliah.';
    }
    if (input.includes('fisika') || input.includes('newton')) {
      return 'Fisika mempelajari interaksi materi dan energi. Konsep kunci seperti Hukum Newton adalah fondasi untuk memahami dunia di sekitar kita.';
    }
    if (input.includes('kehadiran') || input.includes('wajah') || input.includes('absensi')) {
      return 'Sistem Kehadiran Wajah menggunakan AI untuk mendeteksi dan mencatat absensi secara otomatis, sehingga lebih cepat dan akurat.';
    }
    if (input.includes('dashboard') || input.includes('perkembangan anak')) {
      return 'Sekolah kami menyediakan Dashboard Siswa dan Portal Orang Tua untuk memantau perkembangan akademik, kehadiran, dan melihat rekomendasi belajar dari AI.';
    }
    if (input.includes('terima kasih') || input.includes('thanks')) {
        return 'Sama-sama! Senang bisa membantu. Ada lagi yang ingin ditanyakan?';
    }
    if (input.includes('halo') || input.includes('hai')) {
        return 'Halo juga! Silakan tanya tentang fitur sekolah atau mata pelajaran.';
    }
    
    // Jawaban default jika tidak ada kata kunci yang cocok
    return 'Maaf, saya belum mengerti pertanyaan itu. Anda bisa bertanya tentang: "matematika", "fisika", "sistem kehadiran", atau "dashboard".';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    const userText = inputValue;
    setInputValue('');
    setIsLoading(true); // Mulai loading (bot "berpikir")

    // Simulasi jeda waktu untuk bot berpikir
    setTimeout(() => {
      const botResponseText = getBotResponse(userText);
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false); // Selesai loading
    }, 1500); // Jeda 1.5 detik
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-5 w-80 h-[28rem] bg-white rounded-xl shadow-2xl flex flex-col z-50"
          >
            <header className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-poppins font-bold text-lg">Asisten AI Edukasi</h3>
              <button onClick={() => setIsOpen(false)}><FaTimes size={20} /></button>
            </header>

            <main className="flex-1 p-4 overflow-y-auto">
              {messages.map(msg => (
                <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-3 max-w-xs ${msg.sender === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Indikator Mengetik ... */}
              {isLoading && (
                 <div className="flex justify-start mb-4">
                    <div className="bg-gray-200 rounded-lg p-3">
                        <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pertanyaanmu..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  autoComplete="off" disabled={isLoading}
                />
                <button type="submit" className="ml-3 bg-accent text-white p-3 rounded-full hover:bg-orange-500 transition-colors disabled:bg-gray-400" disabled={isLoading}>
                  <FaPaperPlane />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-primary text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>
    </>
  );
};

export default Chatbot;