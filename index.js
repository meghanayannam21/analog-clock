
function updateClock() {
    const d = new Date();

    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * (htime % 12) + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    document.getElementById("hour").style.transform =
        `rotate(${hrotation}deg)`;

    document.getElementById("minute").style.transform =
        `rotate(${mrotation}deg)`;

    document.getElementById("second").style.transform =
        `rotate(${srotation}deg)`;

    // Digital time
    let hours = htime % 12 || 12;
    let minutes = String(mtime).padStart(2, '0');
    let seconds = String(stime).padStart(2, '0');
    let period = htime >= 12 ? "PM" : "AM";

    document.getElementById("digitalTime").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}

updateClock();
setInterval(updateClock, 1000);
