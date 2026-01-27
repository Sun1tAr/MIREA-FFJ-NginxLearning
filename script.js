// Обновляем дату в заголовке
function updateDateTime() {
    const now = new Date();
    const dateStr = now.toUTCString();
    document.getElementById('current-date').textContent = dateStr;
}

// Показываем секретное модальное окно
function showSecret() {
    document.getElementById('secret-modal').style.display = 'flex';
}

// Скрываем модальное окно
function hideSecret() {
    document.getElementById('secret-modal').style.display = 'none';
}

// Перезагрузка страницы
function reloadPage() {
    location.reload();
}

// Эффект печатающегося текста
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();

    // Обновляем время каждую секунду
    setInterval(updateDateTime, 1000);

    // Анимация для печатающегося текста
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const originalText = typingElement.textContent;
        typeWriter(typingElement, originalText);
    }

    // Закрытие модального окна по клику вне его
    window.onclick = function(event) {
        const modal = document.getElementById('secret-modal');
        if (event.target === modal) {
            hideSecret();
        }
    }

    // Добавляем звуковой эффект на кнопки (опционально)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Можно добавить звук клика
             new Audio('click.mp3').play();
        });
    });

    // Случайные цвета для статуса
    const statusValues = document.querySelectorAll('.status-value');
    statusValues.forEach(status => {
        if (!status.classList.contains('running')) {
            const hue = Math.floor(Math.random() * 360);
            status.style.color = `hsl(${hue}, 100%, 70%)`;
        }
    });
});