document.addEventListener("DOMContentLoaded", () => {
  // Night jasmine (Nyctanthes arbor-tristis) photos from Wikimedia Commons
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nyctanthes_arbor-tristis.jpg/1920px-Nyctanthes_arbor-tristis.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%28Nyctanthes_arbor-tristis%29_flower_at_Madhurawada_01.JPG/1920px-%28Nyctanthes_arbor-tristis%29_flower_at_Madhurawada_01.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sepalika_%28Nyctanthes_arbor-tristis%29.jpg/1920px-Sepalika_%28Nyctanthes_arbor-tristis%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nyctanthes_arbor-tristis_flower.jpg/1920px-Nyctanthes_arbor-tristis_flower.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Nyctanthes_arbor-tristis_flower_Madhurawada_Visakhapatnam.JPG/1920px-Nyctanthes_arbor-tristis_flower_Madhurawada_Visakhapatnam.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/IMG_7920_Nyctanthes_arbor-tristis_%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C_Photographed_by_Peak_Hora.jpg/1920px-IMG_7920_Nyctanthes_arbor-tristis_%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C_Photographed_by_Peak_Hora.jpg"
  ];

  const carousel = document.getElementById("carousel");
  const slides = images.map((src, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.style.backgroundImage = `url("${src}")`;
    carousel.appendChild(slide);
    return slide;
  });

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); // Change image every 5 seconds
});
