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

// Hamburger Menü İşlemleri
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.close-menu');

if (hamburger && navMenu && closeMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Menü linklerine tıklandığında menüyü kapat (dropdown hariç)
    document.querySelectorAll('.nav-menu > a, .nav-menu button').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Dropdown menü işlemleri
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Event'in yukarı yayılmasını engelle
        dropdown.classList.toggle('active');
    });

    // Dropdown menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !e.target.closest('.dropdown')) {
            dropdown.classList.remove('active');
        }
    });

    // Sadece dropdown menü linklerine tıklandığında menüleri kapat
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('active');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}
