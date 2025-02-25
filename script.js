// Terapkan tema lebih awal untuk menghindari efek flash
(function applyInitialTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);
})();

// Toggle Dark Mode
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

function applyTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    html.classList.toggle("dark", isDark);

    // Perbarui ikon sesuai tema
    if (themeIcon) {
        themeIcon.classList.remove("fa-moon", "fa-sun");
        themeIcon.classList.add(isDark ? "fa-sun" : "fa-moon");
    }
}

// Terapkan tema saat halaman dimuat
applyTheme();

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Ganti ikon langsung saat diklik
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon", "fa-sun");
            themeIcon.classList.add(isDark ? "fa-sun" : "fa-moon");
        }
    });
}


// Typing Effect dengan pengecekan elemen
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typedText");
    if (!textElement) return;

    const words = ["Web Developer...", "Freelancer...", "Content Creator..."];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        let speed = isDeleting ? 50 : 100;
        textElement.textContent = words[wordIndex].substring(0, charIndex);

        if (!isDeleting && charIndex < words[wordIndex].length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else if (!isDeleting && charIndex === words[wordIndex].length) {
            isDeleting = true;
            speed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

