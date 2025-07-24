// Smooth scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Fade-in animation on scroll
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial check for elements already in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Add smooth hover effects to hero image
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        heroImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        heroImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Add parallax effect to honeycomb background
    const honeycombBg = document.querySelector('.honeycomb-bg');
    if (honeycombBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            honeycombBg.style.transform = `translateY(${rate}px)`;
        });
    }
});
