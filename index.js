// Header işlemleri
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}
if (dropdown) {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 869) {
            dropdown.classList.toggle('active');
        }
    });
}


//SLİDER KODU
// Slider'ın fare ile kaydırılabilmesi
const slider = document.querySelector(".slider-track");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Kaydırma hızını ayarlayabilirsiniz
  slider.scrollLeft = scrollLeft - walk;
});

// Slider'ın otomatik kayması
function autoSlide() {
  const sliderTrack = document.querySelector(".slider-track");
  const sliderWidth = sliderTrack.scrollWidth;
  const containerWidth = sliderTrack.clientWidth;

  // Slider'ın sonuna gelindiğinde başa dön
  if (sliderTrack.scrollLeft + containerWidth >= sliderWidth) {
    sliderTrack.scrollLeft = 0;
  } else {
    sliderTrack.scrollLeft += 1; // Kaydırma hızını ayarlayabilirsiniz
  }

  requestAnimationFrame(autoSlide);
}

// Otomatik kaydırmayı başlat
autoSlide();

// Proje kartlarına tıklanabilirlik
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (!isDown) {
      const href = this.querySelector("a").getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    }
  });
});
// Loader işlemi
window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-container");
    if (loaderContainer) {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            loaderContainer.classList.add("hidden");
            document.body.style.overflow = "auto";
            setTimeout(() => {
                loaderContainer.remove();
            }, 500);
        }, 1000);
    }
});
