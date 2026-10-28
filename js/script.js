document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. Автоматический текущий год
    const yearEl = document.querySelector('#year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Кнопка смены темы (обычная светлая/темная)
    const themeBtn = document.querySelector('#theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // 3. Отправка формы и вывод статуса
    const form = document.querySelector('form');
    const statusMsg = document.querySelector('#form-status');
    if (form && statusMsg) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();        
            const nameEl = document.querySelector('#name');
            const name = nameEl ? nameEl.value.trim() : 'гость';

            statusMsg.textContent = `Спасибо, ${name}! Сообщение отправлено.`;
            statusMsg.classList.add('visible');

            form.reset();                  
        });
    }

    // 4. Кнопка «Наверх»
    const upBtn = document.querySelector('#to-top');
    if (upBtn) {
        window.addEventListener('scroll', () => {
            upBtn.classList.toggle('visible', window.scrollY > 400);
        });

        upBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Управление панелью для слабовидящих
    const setAccessibilityClass = (targetClass, allClassVariants) => {
        allClassVariants.forEach(cls => body.classList.remove(cls));
        if (targetClass) {
            body.classList.add(targetClass);
        }
    };

    // Шрифты
    const fontNormal = document.getElementById('font-normal');
    const fontLarge = document.getElementById('font-large');
    const fontXlarge = document.getElementById('font-xlarge');
    const fontClasses = ['font-large', 'font-xlarge'];

    if (fontNormal) fontNormal.addEventListener('click', () => setAccessibilityClass(null, fontClasses));
    if (fontLarge) fontLarge.addEventListener('click', () => setAccessibilityClass('font-large', fontClasses));
    if (fontXlarge) fontXlarge.addEventListener('click', () => setAccessibilityClass('font-xlarge', fontClasses));

    // Спец-режимы отображения (Ч/Б и Инверсия)
    const themeDefault = document.getElementById('theme-default');
    const themeBw = document.getElementById('theme-bw');
    const themeInvert = document.getElementById('theme-invert');
    const a11yThemes = ['theme-bw', 'theme-invert'];

    if (themeDefault) themeDefault.addEventListener('click', () => setAccessibilityClass(null, a11yThemes));
    if (themeBw) themeBw.addEventListener('click', () => setAccessibilityClass('theme-bw', a11yThemes));
    if (themeInvert) themeInvert.addEventListener('click', () => setAccessibilityClass('theme-invert', a11yThemes));
});
