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
});
