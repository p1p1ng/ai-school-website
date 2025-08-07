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
      longDescription: "Berdasarkan profil minat, bakat, dan performa akademik, sistem AI kami menganalisis dan merekomendasikan jurusan kuliah yang paling sesuai untuk masa depan siswa.",
      howItWorks: ["Menganalisis hasil tes minat bakat.", "Mencocokkan dengan performa akademik.", "Memberikan 3 rekomendasi teratas beserta jalur karirnya."],
      techStack: ["Python", "Scikit-learn", "API Kampus"],
      // --- PERBARUI BAGIAN VISUALIZATION DI BAWAH INI ---
      visualization: {
        type: 'recommendation_list',
        data: [
          {
            major: 'Teknik Informatika',
            matchScore: 95,
            reasons: ['Bakat Logika-Matematika tinggi', 'Minat pada teknologi', 'Pola pikir sistematis'],
            careers: ['Software Engineer', 'Data Scientist', 'IT Consultant'],
            color: 'blue'
          },
          {
            major: 'Desain Komunikasi Visual (DKV)',
            matchScore: 88,
            reasons: ['Bakat Kreativitas & Visual menonjol', 'Menyukai seni dan media', 'Kemampuan bercerita visual'],
            careers: ['Graphic Designer', 'UI/UX Designer', 'Animator'],
            color: 'orange'
          },
          {
            major: 'Manajemen Bisnis',
            matchScore: 82,
            reasons: ['Kemampuan Linguistik baik', 'Tertarik pada strategi & kepemimpinan', 'Pola pikir terorganisir'],
            careers: ['Business Analyst', 'Marketing Manager', 'Entrepreneur'],
            color: 'green'
          }
        ]
      },
      aiInsight: "Tiga jurusan di atas memiliki tingkat kecocokan tertinggi dengan profil siswa saat ini. Teknik Informatika menjadi rekomendasi utama karena sinergi kuat antara bakat logika dan minat pada teknologi."
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
      longDescription: "Sebuah portal terpusat yang menyajikan data perkembangan siswa secara real-time dengan notifikasi cerdas, membantu orang tua dan guru untuk berkolaborasi dalam mendukung kesuksesan siswa.",
      howItWorks: ["Mengagregasi data dari berbagai sistem (kehadiran, nilai, tugas).", "Menyajikannya dalam bentuk grafik dan ringkasan yang mudah dibaca.", "Mengirim notifikasi otomatis untuk pencapaian atau isu penting."],
      techStack: ["React", "Node.js", "MongoDB", "FCM"],
      // --- PERBARUI BAGIAN VISUALIZATION DI BAWAH INI ---
      visualization: {
        type: 'dashboard_preview',
        data: [
          {
            metric: 'Notifikasi Cerdas Terkirim',
            value: '12',
            iconName: 'FaBell'
          },
          {
            metric: 'Laporan Dilihat Orang Tua',
            value: '8',
            iconName: 'FaEye'
          },
          {
            metric: 'Analisis Perilaku Positif',
            value: 'Naik 15%',
            iconName: 'FaSmile'
          },
          {
            metric: 'Performa Akademik',
            value: 'Stabil',
            iconName: 'FaChartLine'
          }
        ]
      },
      aiInsight: "Sistem mendeteksi adanya peningkatan partisipasi di kelas Fisika. Notifikasi pencapaian telah disiapkan untuk dikirim ke orang tua."
    }
  },
  {
    slug: 'progress-report-otomatis',
    iconName: "FaSyncAlt",
    title: "Progress Report Otomatis",
    description: "Menghasilkan laporan kemajuan siswa secara otomatis.",
    details: {
      longDescription: "Sistem AI secara otomatis mengkompilasi data performa, kehadiran, dan partisipasi siswa untuk menghasilkan laporan kemajuan yang komprehensif dalam format PDF setiap periode.",
      howItWorks: ["Menarik data nilai dan kehadiran.", "Menganalisis pencapaian dan area peningkatan.", "Menyusunnya ke dalam template laporan profesional.", "Guru dapat meninjau dan mengirimkannya ke orang tua dengan satu klik."],
      techStack: ["Node.js", "Puppeteer", "MongoDB", "Recharts"],
      // --- PERBARUI BAGIAN VISUALIZATION DI BAWAH INI ---
      visualization: {
        type: 'report_preview',
        data: {
          studentName: 'Andi Pratama',
          period: 'Semester Ganjil - 2025',
          highlights: [
            'Peningkatan signifikan pada Fisika (+12%)',
            'Kehadiran 100% pada bulan Juni & Juli',
            'Proyek Sejarah mendapat nilai A',
            'Keaktifan di kelas meningkat'
          ],
          performanceData: [
            { subject: 'Matematika', score: 88, target: 85 },
            { subject: 'Fisika', score: 92, target: 85 },
            { subject: 'Kimia', score: 81, target: 85 },
            { subject: 'Sejarah', score: 95, target: 90 },
          ]
        }
      },
      aiInsight: "Laporan kemajuan untuk Andi Pratama periode Semester Ganjil 2025 telah berhasil dibuat. Terdapat tren peningkatan yang kuat pada mata pelajaran sains."
    }
  },
];

export default allFeaturesData; // <-- PERUBAHAN UTAMA: MENGGUNAKAN EXPORT DEFAULT