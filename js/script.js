document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // ====================================================
    // 1. АКТУАЛЬНЫЙ ГОД В ПОДВАЛЕ
    // ====================================================
    const yearEl = document.querySelector('#year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }


    // ====================================================
    // 2. ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ ТЕМЫ
    // ====================================================
    const themeBtn = document.querySelector('#theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }


    // ====================================================
    // 3. ОТПРАВКА ФОРМЫ БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ
    // ====================================================
    const form = document.querySelector('form');
    const statusMsg = document.querySelector('#form-status');

    if (form && statusMsg) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // отменяем перезагрузку

            const name = document.querySelector('#name').value.trim();
            statusMsg.textContent = `Спасибо, ${name}! Сообщение отправлено.`;
            statusMsg.classList.add('visible');

            form.reset(); // очищаем поля
        });
    }


    // ====================================================
    // 4. КНОПКА «НАВЕРХ» ПОЯВЛЯЕТСЯ ПРИ ПРОКРУТКЕ
    // ====================================================
    const upBtn = document.querySelector('#to-top');
    if (upBtn) {
        window.addEventListener('scroll', () => {
            upBtn.classList.toggle('visible', window.scrollY > 400);
        });

        upBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ====================================================
    // 5. ПАНЕЛЬ ДЛЯ СЛАБОВИДЯЩИХ
    // ====================================================
    const btnNormal = document.getElementById('font-normal');
    const btnLarge = document.getElementById('font-large');
    const btnXLarge = document.getElementById('font-xlarge');
    const btnThemeDefault = document.getElementById('theme-default');
    const btnThemeBw = document.getElementById('theme-bw');
    const btnThemeInvert = document.getElementById('theme-invert');

    // Изменение размера шрифта
    if (btnNormal) {
        btnNormal.addEventListener('click', () => {
            body.classList.remove('font-large', 'font-xlarge');
        });
    }
    if (btnLarge) {
        btnLarge.addEventListener('click', () => {
            body.classList.remove('font-xlarge');
            body.classList.add('font-large');
        });
    }
    if (btnXLarge) {
        btnXLarge.addEventListener('click', () => {
            body.classList.remove('font-large');
            body.classList.add('font-xlarge');
        });
    }

    // Изменение цветовой схемы
    if (btnThemeDefault) {
        btnThemeDefault.addEventListener('click', () => {
            body.classList.remove('theme-bw', 'theme-invert');
        });
    }
    if (btnThemeBw) {
        btnThemeBw.addEventListener('click', () => {
            body.classList.remove('theme-invert');
            body.classList.add('theme-bw');
        });
    }
    if (btnThemeInvert) {
        btnThemeInvert.addEventListener('click', () => {
            body.classList.remove('theme-bw');
            body.classList.add('theme-invert');
        });
    }
});
