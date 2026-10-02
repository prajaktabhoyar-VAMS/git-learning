document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "project.html";
      }, 1000); // Wait for fade-out before redirect
    });
  }
});
