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
