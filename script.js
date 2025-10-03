

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const genresDropdown = document.getElementById('genres-dropdown');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Toggle dropdown on mobile
        if (window.innerWidth <= 992) {
            genresDropdown.addEventListener('click', (e) => {
                e.preventDefault();
                genresDropdown.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                genresDropdown.classList.remove('active');
            }
        });

        // Add cinematic effect to navbar on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(8, 8, 17, 0.98)';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 15, 26, 0.95)';
            }
        });
  