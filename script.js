/* ========================================
   BARO PORTFOLIO - JAVASCRIPT
   Interactions, Animations & Functionality
   ======================================== */

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initApp();
});

function initApp() {
    initCustomCursor();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimation();
    initWorkFilter();
    initContactForm();
    initSmoothScroll();
}

/* ========================================
   CUSTOM CURSOR
   ======================================== */
function initCustomCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    if (!dot || !outline) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth animation loop
    function animateCursor() {
        // Dot follows quickly
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;

        // Outline follows with delay
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .work-card, .testimonial-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(2)';
            dot.style.background = 'var(--accent-purple)';
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.borderColor = 'var(--accent-purple)';
        });

        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.background = 'var(--accent-cyan)';
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.borderColor = 'rgba(0, 245, 255, 0.5)';
        });
    });
}

/* ========================================
   NAVIGATION
   ======================================== */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/* ========================================
   TYPING EFFECT
   ======================================== */
function initTypingEffect() {
    const words = [
        'Websites',
        'Bots',
        'Trading Bots',
        'WhatsApp Solutions',
        'Digital Products'
    ];

    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before new word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ========================================
   SCROLL ANIMATIONS (GSAP)
   ======================================== */
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero parallax
    gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Section reveals
    const sections = document.querySelectorAll('section:not(.hero)');

    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelectorAll('.service-card, .work-card, .process-step, .testimonial-card');

        if (header) {
            gsap.from(header, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        if (content.length > 0) {
            gsap.from(content, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: content[0],
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });

    // About section specific animations
    gsap.from('.about-image', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.about-text', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Contact section
    gsap.from('.contact-info', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.contact-form-wrapper', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Skill tags stagger
    gsap.from('.skill-tag', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.about-skills',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
}

/* ========================================
   COUNTER ANIMATION
   ======================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

/* ========================================
   WORK FILTER
   ======================================== */
function initWorkFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            workCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    gsap.to(card, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        display: 'block'
                    });
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.4,
                        display: 'none'
                    });
                }
            });
        });
    });
}

/* ========================================
   CONTACT FORM
   ======================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        // Simulate API call
        setTimeout(() => {
            showToast('Message sent successfully! I\'ll get back to you soon.');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            lucide.createIcons();
        }, 1500);
    });

    function showToast(message) {
        if (!toast) return;

        toast.querySelector('span').textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   MAGNETIC EFFECT (Optional enhancement)
   ======================================== */
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .service-card');

    if (window.matchMedia('(pointer: coarse)').matches) return;

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ========================================
   PARALLAX ORBS
   ======================================== */
function initParallaxOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');

    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.02;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;

            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize parallax orbs
initParallaxOrbs();

/* ========================================
   SERVICE CARD HOVER EFFECT
   ======================================== */
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});

/* ========================================
   PRELOADER (Optional)
   ======================================== */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/* ========================================
   ACTIVE NAV LINK ON SCROLL
   ======================================== */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

/* ========================================
   WHATSAPP INTEGRATION
   ======================================== */
function initWhatsAppIntegration() {
    // Add WhatsApp click handlers
    const whatsappElements = document.querySelectorAll('[data-whatsapp]');

    whatsappElements.forEach(el => {
        el.addEventListener('click', () => {
            const phone = '2348169927034';
            const message = encodeURIComponent('Hi baro, I\'m interested in your services!');
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    });
}

initWhatsAppIntegration();
