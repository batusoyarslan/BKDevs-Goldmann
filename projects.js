function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  
  // Performans için RAF kullanımı
  requestAnimationFrame(() => {
    mainImage.classList.remove("active");
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    mainImage.classList.add("active");
    
    thumbnails.forEach((img) => img.classList.remove("active"));
    thumbnail.classList.add("active");
  });
}

function autoChangeImages() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = 0;
  
  // Daha uzun interval ile otomatik değişim
  setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    changeImage(thumbnails[currentIndex]);
  }, 5000);
}

// Sayfa yüklendiğinde
window.addEventListener("load", () => {
  const activeThumbnail = document.querySelector(".thumbnail.active");
  if (activeThumbnail) {
    changeImage(activeThumbnail);
  } else {
    const firstThumbnail = document.querySelector(".thumbnail");
    if (firstThumbnail) {
      changeImage(firstThumbnail);
    }
  }
  
  // Görüntüler yüklendikten sonra otomatik değişimi başlat
  setTimeout(autoChangeImages, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  // Animasyon yapılacak öğeleri seç
  const elements = document.querySelectorAll(".fade-in, .slide-in, .scale-in");
  
  // Performans için daha düşük threshold
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add("visible");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px"
    }
  );

  elements.forEach((element) => observer.observe(element));
});
