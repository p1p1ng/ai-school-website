// src/data/featuresInfo.js

// Perhatikan: kita tidak lagi menggunakan 'export const', kita akan menggunakan 'export default' di akhir.
const allFeaturesData = [
  {
    slug: 'deteksi-minat-bakat',
    iconName: "FaBrain",
    title: "Deteksi Minat & Bakat",
    description: "Menggunakan AI untuk menganalisis pola belajar dan aktivitas siswa.",
    details: {
      longDescription: "Sistem ini menggunakan model Machine Learning untuk menganalisis berbagai titik data dari aktivitas akademik dan non-akademik siswa untuk memetakan potensi dan minat mereka yang sesungguhnya.",
      howItWorks: ["Mengumpulkan data dari nilai, partisipasi kelas, dan pilihan ekstrakurikuler.", "Model AI menganalisis pola dan korelasi tersembunyi.", "Menghasilkan profil minat dan bakat dalam bentuk visual."],
      techStack: ["React", "TensorFlow.js", "Scikit-learn", "Recharts"],
      visualization: { type: 'radar_chart', data: [{ subject: 'Logika', score: 85 }, { subject: 'Kreativitas', score: 92 }, { subject: 'Linguistik', score: 78 }, { subject: 'Kinestetik', score: 65 }, { subject: 'Visual', score: 88 }] },
      aiInsight: "Hasil analisis menunjukkan siswa memiliki kecenderungan kuat pada bidang Kreativitas dan Visual-Spasial."
    }
  },
  {
    slug: 'prediksi-prestasi-akademik',
    iconName: "FaChartLine",
    title: "Prediksi Prestasi Akademik",
    description: "Memanfaatkan Big Data untuk memprediksi performa siswa di masa depan.",
    details: {
      longDescription: "Dengan memanfaatkan data historis performa siswa, model prediksi kami dapat mengestimasi hasil akademik di masa depan dan memberikan peringatan dini jika diperlukan.",
      howItWorks: ["Menganalisis tren nilai dari semester sebelumnya.", "Membandingkan pola belajar dengan ribuan data siswa lainnya.", "Menghasilkan prediksi nilai dengan tingkat kepercayaan (confidence score)."],
      techStack: ["Python", "Pandas", "TensorFlow", "API Dummy"],
      visualization: { type: 'bar_chart', data: [{ subject: 'Matematika', 'Prediksi Nilai': 88 }, { subject: 'Fisika', 'Prediksi Nilai': 91 }, { subject: 'Kimia', 'Prediksi Nilai': 82 }] },
      aiInsight: "Prediksi menunjukkan potensi nilai 'A' di Fisika dengan tingkat kepercayaan 94%."
    }
  },
  {
    slug: 'rekomendasi-jurusan',
    iconName: "FaUserGraduate",
    title: "Rekomendasi Jurusan",
    description: "Memberikan rekomendasi studi lanjut yang dipersonalisasi.",
    details: {
      longDescription: "Memberikan rekomendasi jurusan kuliah dan studi lanjut yang paling sesuai dengan profil unik setiap siswa.",
      howItWorks: ["Menganalisis hasil tes minat bakat.", "Mencocokkan dengan performa akademik.", "Memberikan 3 rekomendasi teratas beserta jalur karirnya."],
      techStack: ["Python", "Scikit-learn", "API Kampus"],
      visualization: { type: 'default' },
      aiInsight: "Jurusan Teknik Informatika, DKV, dan Manajemen Bisnis adalah pilihan yang sangat cocok."
    }
  },
  {
    slug: 'sistem-kehadiran-berbasis-wajah',
    iconName: "FaRegIdCard",
    title: "Sistem Kehadiran Berbasis Wajah",
    description: "Otomatisasi absensi dengan teknologi pengenalan wajah.",
    details: {
      longDescription: "Menggantikan absensi manual dengan sistem pengenalan wajah otomatis untuk meningkatkan efisiensi dan akurasi data kehadiran.",
      howItWorks: ["Kamera mendeteksi wajah siswa saat masuk.", "Model AI mencocokkan wajah dengan database.", "Data kehadiran langsung tercatat di sistem."],
      techStack: ["OpenCV", "TensorFlow.js", "Node.js"],
      visualization: { type: 'live_log', data: [{ student: 'Andi Pratama', time: '07:01:12' }, { student: 'Bunga Citra', time: '07:01:15' }, { student: 'Rendi Wijaya', time: '07:02:01' }] },
      aiInsight: "Akurasi sistem deteksi hari ini mencapai 99.8%."
    }
  },
  {
    slug: 'dashboard-orang-tua-guru',
    iconName: "FaChalkboardTeacher",
    title: "Dashboard Orang Tua & Guru",
    description: "Notifikasi cerdas dan laporan perkembangan real-time.",
    details: {
      longDescription: "Sebuah portal terpusat yang menyajikan data perkembangan siswa secara real-time dengan notifikasi cerdas.",
      howItWorks: ["Mengagregasi data dari berbagai sistem.", "Menyajikannya dalam bentuk grafik yang mudah dibaca.", "Mengirim notifikasi otomatis untuk isu penting."],
      techStack: ["React", "Node.js", "MongoDB"],
      visualization: { type: 'default' },
      aiInsight: "Notifikasi cerdas telah dikirim ke orang tua mengenai tugas Matematika yang akan datang."
    }
  },
  {
    slug: 'progress-report-otomatis',
    iconName: "FaSyncAlt",
    title: "Progress Report Otomatis",
    description: "Menghasilkan laporan kemajuan siswa secara otomatis.",
    details: {
      longDescription: "Sistem yang secara otomatis menghasilkan laporan kemajuan belajar siswa dalam format PDF yang siap dibagikan.",
      howItWorks: ["Menarik data nilai dan kehadiran.", "Menyusunnya ke dalam template laporan.", "Guru dapat mengirimkannya ke orang tua dengan satu klik."],
      techStack: ["Node.js", "Puppeteer", "MongoDB"],
      visualization: { type: 'default' },
      aiInsight: "Laporan kemajuan untuk bulan Juni telah berhasil dibuat untuk 98% siswa."
    }
  },
];

export default allFeaturesData; // <-- PERUBAHAN UTAMA: MENGGUNAKAN EXPORT DEFAULT