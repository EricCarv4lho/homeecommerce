let slideIndex = 0;
carousel();

function carousel() {
  let slides = document.querySelectorAll(".banner-slide");
  setInterval(() => {
    slideIndex++;
    document.querySelector(".banner-slides").style.transition = "transform 1s ease-in-out";
    document.querySelector(".banner-slides").style.transform = `translateX(-${slideIndex * 100}%)`;

    // Se chegou ao último slide, reinicie
    if (slideIndex === slides.length - 1) {
      setTimeout(() => {
        slideIndex = 0;
        document.querySelector(".banner-slides").style.transition = "none";
        document.querySelector(".banner-slides").style.transform = `translateX(0)`;
      }, 1000); // Tempo de transição
    }
  }, 3000); // Altere o tempo de exibição dos banners aqui (em milissegundos)
}