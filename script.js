function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza imediatamente ao carregar
updateClock();

// Remove a opacidade zero para mostrar o conteúdo com a animação
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
