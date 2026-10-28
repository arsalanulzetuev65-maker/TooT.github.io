// ====================================================
// 1. АКТУАЛЬНЫЙ ГОД В ПОДВАЛЕ
// ====================================================
const yearEl = document.querySelector('#year');
yearEl.textContent = new Date().getFullYear();


// ====================================================
// 2. ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ ТЕМЫ
//    JS переключает класс на <html>, а стили описаны в CSS
// ====================================================
const themeBtn = document.querySelector('#theme-toggle');

themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
});


// ====================================================
// 3. ОТПРАВКА ФОРМЫ БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ
// ====================================================
const form = document.querySelector('form');
const statusMsg = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
    event.preventDefault();        // отменяем перезагрузку

    const name = document.querySelector('#name').value.trim();

    statusMsg.textContent = `Спасибо, ${name}! Сообщение отправлено.`;
    statusMsg.classList.add('visible');

    form.reset();                  // очищаем поля
});


// ====================================================
// 4. КНОПКА «НАВЕРХ» ПОЯВЛЯЕТСЯ ПРИ ПРОКРУТКЕ
// ====================================================
const upBtn = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    upBtn.classList.toggle('visible', window.scrollY > 400);
});
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Изменение размера шрифта
    document.getElementById('font-normal').addEventListener('click', () => {
        body.classList.remove('font-large', 'font-xlarge');
    });
    document.getElementById('font-large').addEventListener('click', () => {
        body.classList.remove('font-xlarge');
        body.classList.add('font-large');
    });
    document.getElementById('font-xlarge').addEventListener('click', () => {
        body.classList.remove('font-large');
        body.classList.add('font-xlarge');
    });

    // Изменение цветовой схемы
    document.getElementById('theme-default').addEventListener('click', () => {
        body.classList.remove('theme-bw', 'theme-invert');
    });
    document.getElementById('theme-bw').addEventListener('click', () => {
        body.classList.remove('theme-invert');
        body.classList.add('theme-bw');
    });
    document.getElementById('theme-invert').addEventListener('click', () => {
        body.classList.remove('theme-bw');
        body.classList.add('theme-invert');
    });
});

upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
