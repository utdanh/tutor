const content = {
    en: {
        logoText: "MathTutor",
        heroTitle: "Master High School Mathematics",
        heroDesc: "Explore our interactive lessons designed to make complex mathematical concepts simple and easy to understand. Choose a topic below to begin your learning journey.",
        footerText: "&copy; 2026 MathTutor. All rights reserved.",
        readMore: "Start Lesson",
        lessons: [
            {
                id: "exp-eq",
                title: "Exponential Equations",
                desc: "Learn how to solve exponential equations step by step with interactive examples and clear explanations.",
                icon: "📈",
                link: "en/exponential-equation.html"
            }
        ]
    },
    vi: {
        logoText: "GiaSưToán",
        heroTitle: "Chinh Phục Toán Học THPT",
        heroDesc: "Khám phá các bài giảng tương tác được thiết kế để làm cho các khái niệm toán học phức tạp trở nên đơn giản và dễ hiểu. Chọn một chủ đề bên dưới để bắt đầu hành trình học tập của bạn.",
        footerText: "&copy; 2026 GiaSưToán. Mọi quyền được bảo lưu.",
        readMore: "Bắt đầu học",
        lessons: [
            {
                id: "exp-eq",
                title: "Phương Trình Mũ",
                desc: "Học cách giải phương trình mũ theo từng bước với các ví dụ tương tác trực quan và giải thích rõ ràng.",
                icon: "📈",
                link: "vi/phuong-trinh-mu.html"
            }
        ]
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update static text
    const data = content[lang];
    document.title = data.heroTitle;
    document.getElementById('logo-text').innerHTML = data.logoText;
    document.getElementById('hero-title').innerHTML = data.heroTitle;
    document.getElementById('hero-desc').innerHTML = data.heroDesc;
    document.getElementById('footer-text').innerHTML = data.footerText;

    // Update document language attribute
    document.documentElement.lang = lang;

    // Update lessons grid
    renderLessons();
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

function renderLessons() {
    const grid = document.getElementById('lessons-grid');
    const data = content[currentLang];
    
    grid.innerHTML = data.lessons.map(lesson => `
        <a href="${lesson.link}" class="lesson-card">
            <div class="lesson-icon">${lesson.icon}</div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <p class="lesson-desc">${lesson.desc}</p>
            <div class="lesson-action">
                ${data.readMore}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </a>
    `).join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Try to load saved preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && content[savedLang]) {
        currentLang = savedLang;
    }

    // Bind language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    // Initial render
    setLanguage(currentLang);
});
