document.addEventListener('DOMContentLoaded', () => {
    
    // --- THEME SLIDER LOGIC ---
    const themeCheckbox = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });


    // --- SCROLL REVEAL LOGIC ---
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                const cards = entry.target.querySelectorAll('.video-card, .class-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        const items = el.querySelectorAll('.video-card, .class-card');
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = '0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        });
        observer.observe(el);
    });
});