    function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const russianDate = today.toLocaleDateString('ru-RU', options);

const dayElement = document.getElementById('DayToday');

dayElement.textContent = `${russianDate}`;

setInterval(updateClock, 100);

updateClock();