const $ = (id) => {
    return document.getElementById(id);
    //jQuery-like function that selects the elements its id and returns to avoid repetition
}

const $days = $('tDays');
const $hours = $('tHours');
const $minutes = $('tMinutes');
const $seconds = $('tSeconds');
const targetDate = new Date('2024-03-19T00:00:00');
//const targetDate = new Date();
//targetDate.setDate(targetDate.getDate() + 10);
//targetDate.setHours(23, 59, 0);
document.querySelector(".presentDate").textContent = targetDate.toDateString();
const updateTimer = () => {
    let totalInSec = Math.floor(
        (targetDate.valueOf() - new Date().valueOf()) / 1000
    );

    if (totalInSec < 0) {
        totalInSec = 0;
        //doesn't let the value to be negative
    }

    const seconds = Math.floor(
        totalInSec % 60
    );
    const minutes = Math.floor(
        (totalInSec / 60) % 60
    );
    const hours = Math.floor(
        (totalInSec / 60 / 60) % 24
    );
    const days = Math.floor(
        totalInSec / 60 / 60 / 24
    );
    const format = (num) => {
        return `${num}`.padStart(2, '0');
    };

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
};

setInterval(updateTimer, 1000);