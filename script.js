// Simple e-commerce functionality

// Cart functionality
let cartCount = 0;

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartLink = document.querySelector('nav ul li a[href="#cart"]');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartLink.textContent = `Cart (${cartCount})`;
        
        // Visual feedback
        const originalText = this.textContent;
        this.textContent = 'Added!';
        this.style.backgroundColor = '#32cd32';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 1500);
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our latest offers soon.`);
        emailInput.value = '';
    }
});

// CTA Button
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', function() {
    alert('Welcome to GlowUp Cosmetics! Browse our featured products below.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#cart') return; // Skip cart link
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Product hover effect enhancement
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('GlowUp Cosmetics website loaded!');
    
    // Add animation to hero text
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});