setInterval(getTime, 1000);

function getTime() {
    const date = new Date();

    const day = formatTime(date.getDate());
    const month = formatTime(date.getMonth() + 1);
    const year = date.getFullYear();

    document.getElementById("date").innerHTML = `${day}/${month}/${year}`;

    document.getElementById("hours").innerHTML = formatTime(date.getHours());
    document.getElementById("minute").innerHTML = formatTime(date.getMinutes());
    document.getElementById("seconds").innerHTML = formatTime(date.getSeconds());
}

getTime();

function formatTime(time) {
    if (time < 10) {
        time = `0${time}`;
        return time;
    } else {
        return time;
    }
}