// Görsel değişim fonksiyonu
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");

    // Eski aktif resmi kaldır
    mainImage.classList.remove("active");

    // Yeni resim geçiş efekti
    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
        mainImage.classList.add("active");
    }, 200); // Kısa bir gecikme ile geçiş efekti

    // Aktif küçük resmi değiştir
    thumbnails.forEach((img) => img.classList.remove("active"));
    thumbnail.classList.add("active");
}

// Yeni fonksiyon: Resimleri otomatik değiştirme
function autoChangeImages() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length; // Sırasıyla döngü
        changeImage(thumbnails[currentIndex]);
    }, 3000); // 3 saniyede bir değişim
}

// Sayfa yüklendiğinde otomatik değişimi başlat
window.onload = () => {
    changeImage(document.querySelector(".thumbnail.active")); // İlk resmi göster
    autoChangeImages(); // Resimleri otomatik değiştir
};
