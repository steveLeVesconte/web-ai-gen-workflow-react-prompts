document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');

    // Function to toggle mobile menu
    function toggleMobileMenu() {
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    // Event listeners for hamburger and close buttons
    hamburger.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileNav.classList.contains('active') && !mobileNav.contains(event.target) && event.target !== hamburger) {
            toggleMobileMenu();
        }
    });

    // Set active class for current page
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Call setActiveLink on page load
    setActiveLink();

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Close mobile menu if it's open
            if (mobileNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});
