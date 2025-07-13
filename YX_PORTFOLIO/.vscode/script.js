// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Create cyberpunk background effects
    createMatrixRain();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Add glitch effect to hamburger
        hamburger.classList.add('glitch-effect');
        setTimeout(() => {
            hamburger.classList.remove('glitch-effect');
        }, 300);
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.section-title, .project-card, .skill-tag, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // Animated counters
    function animateValue(element, start, end, duration) {
        const startTimestamp = performance.now();
        const step = (timestamp) => {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start) + '+';
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    // Activate counters when stats section is visible
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    document.querySelectorAll('.stat-number').forEach(stat => {
                        const endValue = parseInt(stat.textContent);
                        animateValue(stat, 0, endValue, 2000);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        // Start subtle background effects
        startBackgroundEffects();
    });
});

// Initialize Glitch Effects - DISABLED
function initializeGlitchEffects() {
    // All glitch effects have been disabled
    return;
}

// Random Glitch Effects - DISABLED
function startRandomGlitches() {
    // All random glitch effects have been disabled
    return;
}

function triggerRandomGlitch() {
    // Glitch effect disabled
    return;
}

function triggerScreenGlitch() {
    // Screen glitch effect disabled
    return;
}

// Glitch on button clicks - DISABLED
function addButtonGlitchEffects() {
    // Button glitch effects have been disabled
    return;
}

// Enhanced typing animation - GLITCH EFFECTS REMOVED
function enhancedCyberTypeWriter(element, text) {
    element.innerHTML = '';
    element.classList.add('terminal-cursor');
    let i = 0;
    
    function typeWithoutGlitch() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            
            // Random typing speed for more realistic effect
            const speed = Math.random() * 100 + 50;
            setTimeout(typeWithoutGlitch, speed);
        } else {
            element.classList.remove('terminal-cursor');
        }
    }
    
    typeWithoutGlitch();
}le
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Add glitch effect to hamburger
        hamburger.classList.add('glitch-effect');
        setTimeout(() => {
            hamburger.classList.remove('glitch-effect');
        }, 300);
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 245, 255, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.5)';
        }
    });

    // Enhanced scroll animations with cyberpunk effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Add glitch effect on section reveal
                entry.target.classList.add('glitch-effect');
                setTimeout(() => {
                    entry.target.classList.remove('glitch-effect');
                }, 300);
            }
        });
    }, observerOptions);

    // Add animation class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-animate');
        observer.observe(section);
    });

    // Active navigation highlighting with cyberpunk glow
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                link.style.textShadow = '0 0 15px #00f5ff';
            } else {
                link.style.textShadow = '0 0 5px rgba(0, 245, 255, 0.3)';
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Cyberpunk typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.classList.add('terminal-cursor');
        let i = 0;
        
        function cyberTypeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                // Add random glitch effect while typing
                if (Math.random() < 0.1) {
                    heroTitle.classList.add('glitch-effect');
                    setTimeout(() => {
                        heroTitle.classList.remove('glitch-effect');
                    }, 100);
                }
                setTimeout(cyberTypeWriter, 80);
            } else {
                heroTitle.classList.remove('terminal-cursor');
            }
        }
        
        setTimeout(cyberTypeWriter, 1000);
    }

    // Enhanced cyberpunk statistics animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.about');

    function animateCyberStats() {
        statNumbers.forEach((stat, index) => {
            const finalNumber = stat.textContent;
            const isPercentage = finalNumber.includes('%');
            const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
            
            let current = 0;
            const increment = numericValue / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                    // Add final glow effect
                    stat.style.textShadow = '0 0 20px #9d4edd, 0 0 40px #9d4edd';
                }
                
                if (isPercentage) {
                    stat.textContent = Math.floor(current) + '%';
                } else if (finalNumber.includes('+')) {
                    stat.textContent = Math.floor(current) + '+';
                } else {
                    stat.textContent = Math.floor(current);
                }
                
                // Add random glitch effect during counting
                if (Math.random() < 0.05) {
                    stat.style.color = '#00f5ff';
                    setTimeout(() => {
                        stat.style.color = '';
                    }, 50);
                }
            }, 40);
            
            // Stagger the animations
            setTimeout(() => {
                // Animation starts
            }, index * 200);
        });
    }

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCyberStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Enhanced form submission with cyberpunk feedback
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showCyberAlert('Please fill in all fields.', 'error');
                return;
            }
            
            // Show cyberpunk success message
            showCyberAlert('Message transmitted successfully! Connection established.', 'success');
            this.reset();
        });
    }

    // Cyberpunk parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.3;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        // Add parallax to floating icons
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            const speed = scrolled * (0.1 + index * 0.02);
            icon.style.transform = `translateY(${speed}px)`;
        });
    });

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(157, 78, 221, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Cyberpunk skill tags animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('fade-in-up');
        
        // Add random glow pulse
        setInterval(() => {
            if (Math.random() < 0.01) {
                tag.style.boxShadow = '0 0 20px #9d4edd, 0 0 40px #9d4edd';
                setTimeout(() => {
                    tag.style.boxShadow = '';
                }, 500);
            }
        }, 1000);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        // Start subtle background effects
        startBackgroundEffects();
        
        // Random glitch effects throughout the page
        startRandomGlitches();
        
        // Initialize button glitch effects
        addButtonGlitchEffects();
    });

// Cyberpunk Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function createRainDrop() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 3 + 's';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        matrixContainer.appendChild(char);
        
        setTimeout(() => {
            char.remove();
        }, 5000);
    }
    
    // Create rain drops periodically
    setInterval(createRainDrop, 200);
}

// Cyberpunk Alert System
function showCyberAlert(message, type) {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(26, 26, 46, 0.95));
        border: 2px solid ${type === 'success' ? '#00f5ff' : '#ff0051'};
        border-radius: 8px;
        color: #e0e6ed;
        z-index: 10000;
        backdrop-filter: blur(10px);
        box-shadow: 0 0 20px ${type === 'success' ? 'rgba(0, 245, 255, 0.5)' : 'rgba(255, 0, 81, 0.5)'};
        animation: cyberSlideIn 0.3s ease-out;
    `;
    
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'cyberSlideOut 0.3s ease-in forwards';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Background Effects
function startBackgroundEffects() {
    // Random grid pulse
    const grid = document.querySelector('.cyber-grid');
    setInterval(() => {
        if (Math.random() < 0.1) {
            grid.style.animation = 'grid-pulse 2s ease-in-out';
            setTimeout(() => {
                grid.style.animation = '';
            }, 2000);
        }
    }, 3000);
}

// Utility function to throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttled scroll handler
const throttledScrollHandler = throttle(function() {
    // Handle scroll-based animations here
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Custom cursor effect (optional)
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Add subtle animations to floating icons
document.addEventListener('DOMContentLoaded', function() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 2}s`;
    });
});

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let userInput = [];

document.addEventListener('keydown', function(e) {
    userInput.push(e.code);
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }
    
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        // Activate easter egg
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        userInput = [];
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
