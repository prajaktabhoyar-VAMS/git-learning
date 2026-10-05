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
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  let flakes = [];
  const totalFlakes = 120;

  function createFlakes() {
    flakes = [];
    for (let i = 0; i < totalFlakes; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        density: Math.random() * 2 + 1,
        drift: (Math.random() - 0.5) * 2
      });
    }
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.beginPath();

    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    }

    ctx.fill();
    moveFlakes();
  }

  let angle = 0;
  function moveFlakes() {
    angle += 0.01;

    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      flake.y += Math.pow(flake.density, 2) + 1;
      flake.x += Math.sin(angle + flake.drift) * 1.5 + flake.drift;

      if (flake.y > canvas.height) {
        flakes[i] = {
          x: Math.random() * canvas.width,
          y: 0,
          radius: flake.radius,
          density: flake.density,
          drift: flake.drift
        };
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }
    }
  }

  setCanvasSize();
  createFlakes();
  window.addEventListener("resize", () => {
    setCanvasSize();
    createFlakes();
  });

  function animate() {
    drawFlakes();
    requestAnimationFrame(animate);
  }

  animate();
});
