// src/components/Chatbot.jsx

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Halo! Saya Asisten AI. Ada yang bisa saya bantu seputar pelajaran?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Fungsi untuk auto-scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Simulasi logika AI untuk memberikan respons
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('matematika')) {
      return 'Tentu! Matematika adalah studi tentang angka, struktur, dan ruang. Topik populer termasuk Aljabar, Geometri, dan Kalkulus. Apa yang ingin kamu tahu lebih spesifik?';
    }
    if (input.includes('fisika')) {
      return 'Fisika mempelajari materi, energi, dan interaksinya. Konsep kunci meliputi Hukum Newton, Termodinamika, dan Relativitas. Ada topik Fisika tertentu yang menarik minatmu?';
    }
    if (input.includes('sejarah')) {
      return 'Sejarah adalah jendela masa lalu. Di sekolah kita, kita mempelajari Sejarah Indonesia, mulai dari era kerajaan hingga kemerdekaan. Apakah ada periode spesifik yang ingin kamu diskusikan?';
    }
    if (input.includes('terima kasih') || input.includes('thanks')) {
        return 'Sama-sama! Senang bisa membantu.';
    }
    if (input.includes('halo') || input.includes('hai')) {
        return 'Halo juga! Ada yang bisa saya bantu?';
    }
    return 'Maaf, saya belum mengerti pertanyaan itu. Coba tanyakan tentang "matematika", "fisika", atau "sejarah".';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Tambahkan pesan pengguna ke daftar
    const userMessage = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulasikan bot sedang mengetik
    setIsTyping(true);
    const userText = inputValue;
    setInputValue('');

    // Simulasikan respons bot setelah jeda
    setTimeout(() => {
      const botResponseText = getBotResponse(userText);
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500); // Jeda 1.5 detik
  };

  return (
    <>
      {/* Jendela Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-5 w-80 h-[28rem] bg-white rounded-xl shadow-2xl flex flex-col z-50"
          >
            {/* Header Chat */}
            <header className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-poppins font-bold text-lg">Asisten AI Edukasi</h3>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                <FaTimes size={20} />
              </button>
            </header>

            {/* Area Pesan */}
            <main className="flex-1 p-4 overflow-y-auto">
              {messages.map(msg => (
                <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-3 max-w-xs ${msg.sender === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
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

            {/* Input Form */}
            <footer className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pertanyaanmu..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  autoComplete="off"
                />
                <button type="submit" className="ml-3 bg-accent text-white p-3 rounded-full hover:bg-orange-500 transition-colors">
                  <FaPaperPlane />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Ikon Chatbot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-primary text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>
    </>
  );
};

export default Chatbot;