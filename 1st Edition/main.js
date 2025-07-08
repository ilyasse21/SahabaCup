document.addEventListener("DOMContentLoaded", () => {
  // Countdown
  const targetDate = new Date("August 30, 2025 00:00:00").getTime();
  const countdown = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdown.innerHTML = "It's Game Day!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);

  // Random images for team images inside match cards
  const matchImages = [
    'images/Athletic Bilbao.png',
    'images/Atlético de Madrid.png',
    'images/bayer-04-leverkusen-seeklogo.png',
    'images/CA Osasuna.png',
    'images/cbf-confederacao-brasileira-de-futebol-seeklogo.png',
    'images/Celta de Vigo.png',
    'images/Deportivo Alavés.png',
    'images/Elche CF.png',
    'images/FC Barcelona.png',
    'images/Getafe CF.png',
    'images/Girona FC.png',
    'images/inter-miami-cf-seeklogo.png',
    'images/Levante UD.png',
    'images/Rayo Vallecano.png',
    'images/RCD Espanyol Barcelona.png',
    'images/RCD Mallorca.png',
    'images/Real Betis Balompié.png',
    'images/Real Madrid.png',
    'images/Real Oviedo.png',
    'images/Real Sociedad.png',
    'images/Sevilla FC.png',
    'images/Valencia CF.png',
    'images/Villarreal CF.png'
  ];

  function getRandomImage() {
    return matchImages[Math.floor(Math.random() * matchImages.length)];
  }

  // Replace team images inside each match-card's .teams
  document.querySelectorAll('.match-card .teams').forEach(teamsDiv => {
    teamsDiv.querySelectorAll('img').forEach(img => {
      img.src = getRandomImage();
    });
  });
});
