document.addEventListener('DOMContentLoaded', () => {
    // Kamus Terjemahan
    const translations = {
        id: {
            nav_about: "Tentang",
            nav_edu: "Pendidikan",
            nav_exp: "Pengalaman",
            nav_skills: "Keahlian",
            nav_port: "Proyek",
            nav_contact: "Kontak",
            hero_tagline: "Information Systems Student | Specialist in Parking Management Systems",
            hero_greeting_morning: "Selamat Pagi",
            hero_greeting_afternoon: "Selamat Siang",
            hero_greeting_evening: "Selamat Malam",
            hero_intro: "Saya",
            hero_btn_contact: "Hubungi Saya",
            hero_btn_cv: "Unduh CV (PDF)",
            about_h2: "Tentang Saya",
            about_p1: "Saya merupakan lulusan SMK Asy Syifa jurusan Rekayasa Perangkat Lunak yang saat ini aktif menempuh pendidikan S1 Sistem Informasi di Institut Teknologi Bisnis & Bahasa Dian Cipta Cendekia. Memiliki ketertarikan kuat di bidang teknologi informasi, saya terbiasa belajar hal baru, beradaptasi dengan cepat, serta terus mengembangkan kemampuan baik secara teknis maupun non-teknis. Saya adalah pribadi yang terbuka terhadap pengalaman baru, memiliki motivasi tinggi untuk berkembang, dan siap memberikan kontribusi terbaik dalam lingkungan kerja profesional.",
            edu_h2: "Pendidikan",
            edu_s1: "S1 Sistem Informasi",
            edu_s1_period: "2024 - Sekarang",
            edu_smk: "Rekayasa Perangkat Lunak",
            exp_h2: "Pengalaman Kerja",
            exp_l1: "Mengelola operasional parkir harian dan memastikan kepatuhan ketat terhadap SOP perusahaan.",
            exp_l2: "Mengatur lalu lintas kendaraan dan mengoptimalkan pemanfaatan area parkir.",
            exp_l3: "Memimpin tim operasional, menyusun jadwal kerja, dan memberikan pelatihan rutin kepada staf.",
            exp_l4: "Bertanggung jawab penuh atas laporan pendapatan harian dan pengelolaan arus kas (cash management).",
            exp_l5: "Memastikan sistem integrasi parkir dan infrastruktur keamanan (CCTV) berfungsi optimal.",
            exp_l6: "Menangani dan menyelesaikan keluhan pelanggan dengan pendekatan profesional.",
            skills_h2: "Kemampuan",
            skills_hard: "Hard Skill",
            skills_soft: "Soft Skill",
            skill_mgt: "Dasar Manajemen Sistem & Operasional",
            skill_excel: "Microsoft Excel (Reporting Data)",
            skill_trouble: "Troubleshooting (CCTV / Sistem Parkir)",
            soft_l1: "Problem solving",
            soft_l2: "Cepat belajar teknologi baru",
            soft_l3: "Adaptif terhadap sistem baru",
            soft_l4: "Komunikasi tim yang baik",
            soft_l5: "Berpikir analitis",
            port_h2: "Proyek Pilihan",
            port_all: "Semua",
            port_p1_h3: "Sistem Pelaporan Pendapatan Parkir",
            port_p1_p: "Aplikasi berbasis web untuk mengotomatisasi laporan keuangan parkir harian, mengurangi kesalahan input manual secara signifikan.",
            port_p1_dev: "Masih dalam tahap pengembangan",
            port_p2_h3: "Web Personal Branding",
            port_p2_p: "Website portfolio interaktif ini dibangun menggunakan Vanilla CSS dan JavaScript untuk menunjukkan kemampuan front-end.",
            port_p2_link: "Lihat Proyek",
            cont_h2: "Kontak",
            cont_label_name: "Nama Lengkap",
            cont_ph_name: "Masukkan nama Anda",
            cont_label_email: "Alamat Email",
            cont_ph_email: "email@contoh.com",
            cont_label_msg: "Pesan",
            cont_ph_msg: "Apa yang bisa saya bantu?",
            cont_btn_send: "Kirim Pesan",
            footer_text: "© 2026 RICKY YUDHA PRATAMA. Dibuat Untuk Tugas Web Programming."
        },
        en: {
            nav_about: "About",
            nav_edu: "Education",
            nav_exp: "Experience",
            nav_skills: "Skills",
            nav_port: "Projects",
            nav_contact: "Contact",
            hero_tagline: "Information Systems Student | Specialist in Parking Management Systems",
            hero_greeting_morning: "Good Morning",
            hero_greeting_afternoon: "Good Afternoon",
            hero_greeting_evening: "Good Evening",
            hero_intro: "I am",
            hero_btn_contact: "Contact Me",
            hero_btn_cv: "Download CV (PDF)",
            about_h2: "About Me",
            about_p1: "I am a graduate of SMK Asy Syifa majoring in Software Engineering, currently actively pursuing a Bachelor's degree in Information Systems at ITBA DCC. Having a strong interest in information technology, I am accustomed to learning new things, adapting quickly, and continuously developing both technical and non-technical skills. I am an individual open to new experiences, highly motivated to grow, and ready to provide the best contribution in a professional work environment.",
            edu_h2: "Education",
            edu_s1: "Bachelor of Information Systems",
            edu_s1_period: "2024 - Present",
            edu_smk: "Software Engineering",
            exp_h2: "Work Experience",
            exp_l1: "Manage daily parking operations and ensure strict compliance with company SOPs.",
            exp_l2: "Direct vehicle traffic and optimize parking area utilization.",
            exp_l3: "Lead operational teams, organize work schedules, and provide routine training to staff.",
            exp_l4: "Fully responsible for daily revenue reports and cash flow management.",
            exp_l5: "Ensure parking integration systems and security infrastructure (CCTV) function optimally.",
            exp_l6: "Handle and resolve customer complaints with a professional approach.",
            skills_h2: "Skills",
            skills_hard: "Hard Skills",
            skills_soft: "Soft Skills",
            skill_mgt: "Basic System Management & Operations",
            skill_excel: "Microsoft Excel (Data Reporting)",
            skill_trouble: "Troubleshooting (CCTV / Parking Systems)",
            soft_l1: "Problem solving",
            soft_l2: "Quick learner of new technologies",
            soft_l3: "Adaptive to new systems",
            soft_l4: "Good team communication",
            soft_l5: "Analytical thinking",
            port_h2: "Selected Projects",
            port_all: "All",
            port_p1_h3: "Parking Revenue Reporting System",
            port_p1_p: "A web-based application to automate daily parking financial reports, significantly reducing manual input errors.",
            port_p1_dev: "Under development",
            port_p2_h3: "Web Personal Branding",
            port_p2_p: "This interactive portfolio website was built using Vanilla CSS and JavaScript to demonstrate front-end skills.",
            port_p2_link: "View Project",
            cont_h2: "Contact",
            cont_label_name: "Full Name",
            cont_ph_name: "Enter your name",
            cont_label_email: "Email Address",
            cont_ph_email: "email@example.com",
            cont_label_msg: "Message",
            cont_ph_msg: "How can I help you?",
            cont_btn_send: "Send Message",
            footer_text: "© 2026 RICKY YUDHA PRATAMA. Created For Web Programming Assignment."
        }
    };

    // 1. Fitur Dark Mode dengan Penyimpanan Lokal
    const themeToggle = document.getElementById('theme-toggle');
    
    // Cek preferensi sebelumnya
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });

    // 2. Animasi Reveal saat Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger animasi fill untuk progress bar jika ada di dalam section ini
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = targetWidth;
                });
            }
        });
    }, observerOptions);

    // Mendaftarkan section dan elemen lainnya untuk di-observe
    document.querySelectorAll('section, .project-card, .timeline-item, .experience-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // 3. Validasi Formulir Kontak
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Mohon lengkapi semua data sebelum mengirim.");
            return;
        }

        // Simulasi pengiriman berhasil
        alert(`Terima kasih ${name}, pesan Anda telah terkirim secara profesional!`);
        contactForm.reset();
    });

    // 4. Sistem Filter Portofolio
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Ubah status aktif tombol
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // 5. Fitur Ganti Bahasa
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        const hour = new Date().getHours();
        let timeSuffix = "evening"; // Default Malam/Evening
        if (hour >= 5 && hour < 12) timeSuffix = "morning"; // Pagi
        else if (hour >= 12 && hour < 18) timeSuffix = "afternoon"; // Siang/Sore

        document.querySelectorAll('[data-i18n]').forEach(el => {
            let key = el.getAttribute('data-i18n');
            
            // Penanganan khusus untuk sapaan dinamis berdasarkan waktu
            let translationKey = key;
            if (key === "hero_greeting") translationKey = `${key}_${timeSuffix}`;

            if (translations[lang][translationKey]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][translationKey];
                } else {
                    el.textContent = translations[lang][translationKey];
                }
            }
        });

        // Update status aktif tombol
        langBtns.forEach(btn => btn.classList.remove('active'));
        document.getElementById(`lang-${lang}`).classList.add('active');
        
        // Simpan preferensi
        localStorage.setItem('language', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.split('-')[1];
            setLanguage(lang);
        });
    });

    // Muat bahasa dari preferensi sebelumnya
    const savedLang = localStorage.getItem('language') || 'id';
    setLanguage(savedLang);
});