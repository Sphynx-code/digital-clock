let clock = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    let meridiem = hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, '0'); 

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

clock();
setInterval(clock, 1000);
