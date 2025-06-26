// Counter
const counters = document.querySelectorAll(".counter");
const speed = 500; // The lower the faster

function animateCounters() {
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Intersection Observer to trigger animation when section is in view
const statsSection = document.getElementById("stats");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

observer.observe(statsSection);

// Countdown Timer
const countDownDate = new Date("Jul 28, 2025 00:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
        .toString()
        .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
        .toString()
        .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
        .toString()
        .padStart(2, "0");

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Function to update active nav links
function updateActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove("active"));
    mobileNavLinks.forEach((link) => link.classList.remove("active"));

    navLinks[index]?.classList.add("active");
    mobileNavLinks[index]?.classList.add("active");
}

// Initial call
updateActiveLink();

// Listen for scroll events
window.addEventListener("scroll", updateActiveLink);

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => {
            btn.classList.remove(
                "active",
                "bg-primary",
                "text-white",
                "scale-105",
                "shadow-md"
            );
            btn.classList.add("bg-gray-200", "text-gray-800");

            // Reset transform scale
            btn.style.transform = "scale(1)";
        });

        tabContents.forEach((content) => {
            content.classList.add("hidden");
            content.classList.remove("active");
        });

        // Add active class to clicked button and corresponding content
        button.classList.add("active", "bg-primary", "text-white");
        button.classList.remove("bg-gray-200", "text-gray-800");

        // Add click animation
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1.05)";
        }, 50);

        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.remove("hidden");
        document.getElementById(tabId).classList.add("active");
    });

    // Hover effects
    button.addEventListener("mouseenter", () => {
        if (!button.classList.contains("active")) {
            button.style.transform = "scale(1.05)";
        }
    });

    button.addEventListener("mouseleave", () => {
        if (!button.classList.contains("active")) {
            button.style.transform = "scale(1)";
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible");
        backToTopButton.classList.add("opacity-100", "visible");
    } else {
        backToTopButton.classList.remove("opacity-100", "visible");
        backToTopButton.classList.add("opacity-0", "invisible");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
        }

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 80; // Adjust for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    });
});