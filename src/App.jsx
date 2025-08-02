// src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // <-- 1. Import AnimatePresence
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Reports from './pages/Reports';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ParentAnalytics from './pages/ParentAnalytics';
import FeatureDetailPage from './pages/FeatureDetailPage';

// Komponen baru untuk menangani animasi rute
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait"> {/* <-- 2. Bungkus Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/fitur" element={<Features />} />
        <Route path="/fitur/:slug" element={<FeatureDetailPage />} />
        <Route path="/laporan" element={<Reports />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimoni" element={<Testimonials />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ortu/analytics" element={<ParentAnalytics />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="font-roboto bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes /> {/* <-- 3. Gunakan komponen rute beranimasi */}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;