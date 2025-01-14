function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  mainImage.classList.remove("active");
  setTimeout(() => {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    mainImage.classList.add("active");
  }, 200);
  thumbnails.forEach((img) => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

function autoChangeImages() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    changeImage(thumbnails[currentIndex]);
  }, 3000);
}

window.onload = () => {
  changeImage(document.querySelector(".thumbnail.active"));
  autoChangeImages();
};

document.addEventListener("DOMContentLoaded", () => {
  // Animasyon yapılacak öğeleri seç
  const elements = document.querySelectorAll(".fade-in, .slide-in, .scale-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, //
    }
  );

  elements.forEach((element) => observer.observe(element));
});
