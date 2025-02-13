function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('pt-BR', options);
    document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();