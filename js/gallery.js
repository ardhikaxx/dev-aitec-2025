document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Dapatkan data yang diperlukan
            const imgSrc = this.getAttribute('data-src');
            const caption = this.getAttribute('data-sub-html');
            
            // Buat modal lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
            lightbox.innerHTML = `
                <div class="relative max-w-4xl w-full">
                    <button class="absolute -top-10 right-0 text-white text-2xl">&times;</button>
                    <img src="${imgSrc}" class="w-full max-h-[80vh] object-contain" alt="">
                    <div class="bg-white p-4 mt-2 rounded">${caption}</div>
                </div>
            `;
            
            // Tambahkan ke body
            document.body.appendChild(lightbox);
            
            // Tambahkan event untuk menutup lightbox
            lightbox.querySelector('button').addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
            
            // Tutup saat klik di luar gambar
            lightbox.addEventListener('click', function(e) {
                if (e.target === this) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
});

// Initialize lightGallery
lightGallery(document.getElementById('lightgallery'), {
    selector: '.gallery-item',
    download: false,
    counter: false,
    getCaptionFromTitleOrAlt: false
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 80; // Adjust for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});