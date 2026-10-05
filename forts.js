document.addEventListener("DOMContentLoaded", () => {
  const forts = [
    {
      name: "Raigad Fort",
      description: "The hilltop capital of Chhatrapati Shivaji Maharaj's kingdom.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Raigad_Fort-Rigad.JPG?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Raigad_Fort-Rigad.JPG"
    },
    {
      name: "Shivneri Fort",
      description: "The birthplace of Chhatrapati Shivaji Maharaj, near Junnar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shivneri_Fort.jpg?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Shivneri_Fort.jpg"
    },
    {
      name: "Pratapgad Fort",
      description: "A strategic fort remembered for the 1659 Battle of Pratapgad.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pratapgad_fort_front_view.jpg?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Pratapgad_fort_front_view.jpg"
    },
    {
      name: "Sindhudurg Fort",
      description: "A sea fort built on an island off the Konkan coast.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sindhudurg_Fort%2C_Back_Wall.jpg?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Sindhudurg_Fort,_Back_Wall.jpg"
    },
    {
      name: "Torna Fort",
      description: "Also known as Prachandagad, it was among the first forts captured by Shivaji Maharaj.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Torna_fort(Buruj)_01.jpg?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Torna_fort(Buruj)_01.jpg"
    },
    {
      name: "Lohagad Fort",
      description: "A hill fort in the Sahyadris that formed part of the Maratha stronghold.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bastions_of_Lohagad_Fort_3.jpg?width=1280",
      source: "https://commons.wikimedia.org/wiki/File:Bastions_of_Lohagad_Fort_3.jpg"
    }
  ];

  const slide = document.getElementById("fortSlide");
  const indicators = document.getElementById("fortIndicators");
  const previousButton = document.getElementById("previousFort");
  const nextButton = document.getElementById("nextFort");

  let currentFort = 0;
  let carouselTimer;

  function showFort(index) {
    currentFort = (index + forts.length) % forts.length;
    const fort = forts[currentFort];
    slide.replaceChildren();

    const image = document.createElement("img");
    image.className = "fort-image";
    image.src = fort.image;
    image.alt = fort.name;

    const caption = document.createElement("div");
    caption.className = "fort-caption";

    const title = document.createElement("h2");
    title.textContent = fort.name;

    const description = document.createElement("p");
    description.textContent = fort.description;

    const source = document.createElement("a");
    source.href = fort.source;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Image source: Wikimedia Commons";

    caption.append(title, description, source);
    slide.append(image, caption);

    Array.from(indicators.children).forEach((button, buttonIndex) => {
      const isCurrent = buttonIndex === currentFort;
      button.classList.toggle("active", isCurrent);
      button.setAttribute("aria-current", isCurrent ? "true" : "false");
    });
  }

  function restartCarousel() {
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => showFort(currentFort + 1), 6000);
  }

  forts.forEach((fort, index) => {
    const indicator = document.createElement("button");
    indicator.className = "carousel-indicator";
    indicator.type = "button";
    indicator.setAttribute("aria-label", `Show ${fort.name}`);
    indicator.addEventListener("click", () => {
      showFort(index);
      restartCarousel();
    });
    indicators.appendChild(indicator);
  });

  previousButton.addEventListener("click", () => {
    showFort(currentFort - 1);
    restartCarousel();
  });
  nextButton.addEventListener("click", () => {
    showFort(currentFort + 1);
    restartCarousel();
  });

  showFort(0);
  restartCarousel();
});
