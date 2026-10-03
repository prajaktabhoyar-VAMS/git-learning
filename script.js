document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "project.html";
      }, 1000);
    });
  }

  // Snowfall effect
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let flakes = [];

  function createFlakes() {
    for (let i = 0; i < 100; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        density: Math.random() * 2 + 1
      });
    }
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
      let f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  let angle = 0;
  function moveFlakes() {
    angle += 0.01;
    for (let i = 0; i < flakes.length; i++) {
      let f = flakes[i];
      f.y += Math.pow(f.density, 2) + 1;
      f.x += Math.sin(angle) * 2;

      if (f.y > canvas.height) {
        flakes[i] = {
          x: Math.random() * canvas.width,
          y: 0,
          radius: f.radius,
          density: f.density
        };
      }
    }
  }

  createFlakes();
  setInterval(drawFlakes, 25);
});
