document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Temporary fix for header not being queryable sometimes
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scrolled class to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form submission
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would handle the form submission here
        // For example, using fetch() to send the data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

});
