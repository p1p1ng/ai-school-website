// src/components/Chatbot.jsx

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUserCircle } from 'react-icons/fa';

// --- DATA & KONFIGURASI BARU ---
const BOT_NAME = 'Asisten AI';
const USER_NAME = 'Anda';

const BotAvatar = () => <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0"><FaRobot /></div>;
const UserAvatar = () => <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 flex-shrink-0"><FaUserCircle /></div>;

// --- FUNGSI BARU: Sapaan dinamis berdasarkan waktu ---
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Selamat pagi! Ada yang bisa saya bantu seputar sekolah?';
  if (hour < 18) return 'Selamat siang! Mau cari info tentang pelajaran apa hari ini?';
  return 'Selamat sore! Ada yang bisa saya bantu?';
}

// --- FUNGSI BARU: Mengambil respon acak ---
const getRandomResponse = (responses) => responses[Math.floor(Math.random() * responses.length)];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: getGreeting() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  // --- "OTAK" DUMMY YANG LEBIH DINAMIS ---
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    const responses = {
      greetings: ['Halo juga! Ada yang bisa saya bantu?', 'Hai! Silakan tanya tentang fitur sekolah atau mata pelajaran.'],
      thanks: ['Sama-sama! Senang bisa membantu.', 'Tentu, jika ada lagi yang ingin ditanyakan, jangan ragu ya.'],
      matematika: ['Tentu! Matematika adalah studi tentang angka dan struktur. Di sekolah kita, fokusnya pada pemecahan masalah melalui Aljabar dan Kalkulus.', 'Matematika itu seru! Kita bisa belajar banyak hal mulai dari Geometri hingga Statistika.'],
      fisika: ['Fisika mempelajari interaksi materi dan energi. Konsep kunci seperti Hukum Newton adalah fondasi untuk memahami dunia di sekitar kita.', 'Topik Fisika favorit banyak siswa adalah tentang kelistrikan dan magnet. Sangat menarik!'],
      kehadiran: ['Sistem Kehadiran Wajah menggunakan AI untuk mendeteksi dan mencatat absensi secara otomatis, sehingga lebih cepat dan akurat.', 'Dengan sistem absensi wajah, guru bisa lebih fokus mengajar karena tidak perlu absensi manual lagi.'],
      dashboard: ['Sekolah kami menyediakan Dashboard Siswa dan Portal Orang Tua untuk memantau perkembangan akademik, kehadiran, dan melihat rekomendasi belajar dari AI.', 'Dashboard adalah pusat informasi personal untuk siswa dan orang tua. Semua data penting ada di sana.'],
      default: ['Maaf, saya belum mengerti pertanyaan itu. Anda bisa bertanya tentang: "matematika", "fisika", "sistem kehadiran", atau "dashboard".', 'Bisa coba tanyakan dengan kata kunci lain? Saya masih dalam tahap belajar.', 'Saya dirancang untuk menjawab pertanyaan seputar sekolah. Coba tanya tentang mata pelajaran, ya.']
    };
    
    if (input.includes('matematika')) return getRandomResponse(responses.matematika);
    if (input.includes('fisika')) return getRandomResponse(responses.fisika);
    if (input.includes('kehadiran') || input.includes('wajah')) return getRandomResponse(responses.kehadiran);
    if (input.includes('dashboard') || input.includes('perkembangan')) return getRandomResponse(responses.dashboard);
    if (input.includes('terima kasih')) return getRandomResponse(responses.thanks);
    if (input.includes('halo') || input.includes('hai')) return getRandomResponse(responses.greetings);
    
    return getRandomResponse(responses.default);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    const userText = inputValue;
    setInputValue('');
    setIsLoading(true);

    const randomDelay = Math.random() * 1000 + 800; // Jeda acak antara 0.8 - 1.8 detik
    setTimeout(() => {
      const botResponseText = getBotResponse(userText);
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, randomDelay);
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
            <header className="bg-gray-400 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-poppins font-bold text-lg">Asisten AI Edukasi</h3>
              <button onClick={() => setIsOpen(false)}><FaTimes size={20} /></button>
            </header>

            <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map(msg => (
                // --- Tampilan Pesan yang Baru (dengan Nama & Avatar) ---
                <motion.div 
                  key={msg.id} 
                  className={`flex items-end gap-2 mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === 'bot' && <BotAvatar />}
                  <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <p className="text-xs text-gray-500 mb-1 px-1">{msg.sender === 'user' ? USER_NAME : BOT_NAME}</p>
                    <div className={`rounded-lg p-3 max-w-xs text-sm ${msg.sender === 'user' ? 'bg-blue-300 text-poppins rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                  {msg.sender === 'user' && <UserAvatar />}
                </motion.div>
              ))}
              
              {isLoading && (
                 <motion.div 
                    className="flex items-end gap-2 mb-4 justify-start"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 >
                    <BotAvatar />
                    <div className="flex flex-col items-start">
                        <p className="text-xs text-gray-500 mb-1 px-1">{BOT_NAME}</p>
                        <div className="bg-gray-200 rounded-lg p-3 rounded-bl-none">
                            <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    </div>
                 </motion.div>
              )}
              <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pertanyaanmu..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  autoComplete="off" disabled={isLoading}
                />
                <button type="submit" className="ml-3 bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500 transition-colors disabled:bg-gray-400" disabled={isLoading}>
                  <FaPaperPlane />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-primary text-orange-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>
    </>
  );
};

export default Chatbot;