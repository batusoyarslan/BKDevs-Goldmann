//SLİDER KODU


const slider = document.querySelector('.slider-track');
let isDown = false;
let startX;
let scrollLeft;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX;
    prevTranslate = currentTranslate;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    currentTranslate = prevTranslate + walk;
    
    // Sınırları kontrol et
    const maxTranslate = 0;
    const minTranslate = -(slider.offsetWidth / 1.5);
    currentTranslate = Math.max(Math.min(currentTranslate, maxTranslate), minTranslate);
    
    slider.style.transform = `translateX(${currentTranslate}px)`;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

// Otomatik kaydırma animasyonu
function autoSlide() {
    if (!isDown) {
        currentTranslate -= 0.5;
        
        // Son projeye geldiğinde başa dön
        if (currentTranslate <= -(slider.offsetWidth / 1.5)) {
            currentTranslate = 0;
        }
        
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
    requestAnimationFrame(autoSlide);
}

autoSlide();

// Loader işlemi
window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    
    // Sayfanın scroll'unu devre dışı bırak
    document.body.style.overflow = 'hidden';
    
    // 2 saniye sonra loader'ı kaldır
    setTimeout(() => {
        loaderContainer.classList.add('hidden');
        // Scroll'u tekrar aktif et
        document.body.style.overflow = 'auto';
        
        // Tamamen kaybolunca elementi kaldır
        setTimeout(() => {
            loaderContainer.remove();
        }, 500);
    }, 1000);
});



//SLİDER KODU BİTİŞ