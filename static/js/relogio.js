//Relogio
function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('pt-BR', options);

    document.getElementById('clock').textContent = formattedTime;
    }

    // Atualiza o relógio a cada segundo
    setInterval(updateClock, 1000);

    // Chama a função pela primeira vez para iniciar o relógio
    updateClock();