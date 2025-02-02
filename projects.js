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
});







let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

// Thumbnail'a tıklandığında resmi değiştir
function changeImage(element) {
    // Aktif thumbnail'ı güncelle
    document.querySelector('.thumbnail.active').classList.remove('active');
    element.classList.add('active');
    
    // Ana resmi güncelle
    mainImage.src = element.src;
    mainImage.alt = element.alt;
    
    // Mevcut index'i güncelle
    currentImageIndex = Array.from(images).indexOf(element);
}

// Önceki resme geç
function prevImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    const newImage = images[currentImageIndex];
    
    // Aktif thumbnail'ı güncelle
    document.querySelector('.thumbnail.active').classList.remove('active');
    newImage.classList.add('active');
    
    // Ana resmi güncelle
    mainImage.src = newImage.src;
    mainImage.alt = newImage.alt;
    
    // Smooth geçiş efekti
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.style.opacity = '1';
    }, 100);
}

// Sonraki resme geç
function nextImage() {
    currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    const newImage = images[currentImageIndex];
    
    // Aktif thumbnail'ı güncelle
    document.querySelector('.thumbnail.active').classList.remove('active');
    newImage.classList.add('active');
    
    // Ana resmi güncelle
    mainImage.src = newImage.src;
    mainImage.alt = newImage.alt;
    
    // Smooth geçiş efekti
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.style.opacity = '1';
    }, 100);
}

// Klavye ok tuşları ile geçiş
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
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