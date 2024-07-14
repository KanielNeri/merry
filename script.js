// JavaScript для обратного отсчета времени

function updateCountdown() {
    const weddingDate = new Date("2024-08-24T19:00:00Z").getTime();
    const now = new Date().getTime();

    const difference = weddingDate - now;

    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('weeks').innerHTML = weeks + " недель";
    document.getElementById('days').innerHTML = days + " дней";
    document.getElementById('hours').innerHTML = hours + " часов";
    document.getElementById('minutes').innerHTML = minutes + " минут";
}

updateCountdown();
setInterval(updateCountdown, 1000);

// JavaScript для отправки данных на почту (замените на ваш реальный код)
document.getElementById('confirmationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementsByName('fullName')[0].value;
    console.log('Подтверждено: ' + fullName);
    // Здесь может быть ваш код для отправки данных на сервер
});
