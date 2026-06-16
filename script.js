document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. スマホ用ハンバーガーメニューの制御
    // ==========================================
    const burgerBtn = document.getElementById('burger-btn');
    const navPc = document.querySelector('.nav-pc');

    if (burgerBtn && navPc) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navPc.classList.toggle('active');
        });

        const navLinks = navPc.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navPc.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. レッスン＆料金のタブ切り替え機能
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('id') === `tab-${targetTab}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ==========================================
    // 3. よくあるご質問（FAQ）のアコーディオン機能
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            header.classList.toggle('active');
            body.classList.toggle('active');
        });
    });

    // ==========================================
    // 4. スクロールでふわっと連動するアニメーション
    // ==========================================
    const fadeElements = document.querySelectorAll('.js-fade');

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px'
    });

    fadeElements.forEach(el => intersectionObserver.observe(el));

});
