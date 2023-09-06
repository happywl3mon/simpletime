let timer;
let timeLeft;

var audio = new Audio('timer.wav');

function startTimer() {
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const timerElement = document.getElementById('timer');

    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    timeLeft = (minutes * 60) + seconds;

    document.getElementById('minutes').style.visibility = "hidden";
    document.getElementById('seconds').style.visibility = "hidden";

    document.getElementById('minutesLabel').style.visibility = "hidden";
    document.getElementById('secondsLabel').style.visibility = "hidden";

    document.getElementById('buttonPlay').style.visibility = "hidden";



    if (timeLeft <= 0) {
        alert('Пожалуйста, установите время для таймера.');

        document.getElementById('minutes').style.visibility = "visible";
        document.getElementById('seconds').style.visibility = "visible";

        document.getElementById('minutesLabel').style.visibility = "visible";
        document.getElementById('secondsLabel').style.visibility = "visible";

        document.getElementById('buttonPlay').style.visibility = "visible";

        return;
    }

    // Очищаем предыдущий таймер, если есть
    clearInterval(timer);

    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.textContent = 'Время истекло!';
            audio.play();

        document.getElementById('minutes').style.visibility = "visible";
        document.getElementById('seconds').style.visibility = "visible";

        document.getElementById('minutesLabel').style.visibility = "visible";
        document.getElementById('secondsLabel').style.visibility = "visible";

        document.getElementById('buttonPlay').style.visibility = "visible";

        } else {
            const minutesRemaining = Math.floor(timeLeft / 60);
            const secondsRemaining = timeLeft % 60;

            timerElement.textContent = `${minutesRemaining}:${secondsRemaining.toString().padStart(2, '0')}`;
            timeLeft--;
        }
    }, 1000);
}
