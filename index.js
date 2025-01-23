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
const slider = document.querySelector(".slider-track");
if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let currentTranslate = 0;
    let prevTranslate = 0;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("dragging");
        startX = e.pageX;
        prevTranslate = currentTranslate;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = x - startX;
        currentTranslate = prevTranslate + walk;
        // Sınırları kontrol et
        const maxTranslate = 0;
        const minTranslate = -(slider.offsetWidth / 1.5);
        currentTranslate = Math.max(
            Math.min(currentTranslate, maxTranslate),
            minTranslate
        );
        slider.style.transform = `translateX(${currentTranslate}px)`;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });

    // Otomatik kaydırma animasyonu
    function autoSlide() {
        if (!isDown) {
            currentTranslate -= 0.5;
            if (currentTranslate <= -(slider.offsetWidth / 1.5)) {
                currentTranslate = 0;
            }
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }
        requestAnimationFrame(autoSlide);
    }
    autoSlide();

    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", function (e) {
            if (!isDown) {
                const href = this.getAttribute("data-href");
                if (href) {
                    window.location.href = href;
                }
            }
        });
    });
}

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
