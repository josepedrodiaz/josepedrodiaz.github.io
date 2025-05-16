// Splash Screen Control
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const splashText = document.querySelector('.splash-text');
    const splashTagline = document.querySelector('.splash-tagline');
    const loaderLine = document.querySelector('.loader-line');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Prevent scrolling while splash screen is visible
    body.style.overflow = 'hidden';

    // Hide splash screen after animations complete
    setTimeout(() => {
        // Start transformation
        splashScreen.classList.add('transforming');
        splashText.classList.add('transforming');
        splashTagline.classList.add('transforming');
        loaderLine.classList.add('transforming');
        
        // Show nav after a short delay
        setTimeout(() => {
            nav.classList.add('visible');
            body.style.overflow = '';
            
            // Remove splash screen elements after transition
            setTimeout(() => {
                splashTagline.remove();
                loaderLine.remove();
            }, 500);
        }, 400);
    }, 2000);
});

// Experience keywords for each position
const experienceKeywords = {
    'Radish Lab': [
        '<span class="role">Web Developer</span>',
        '<span class="tech">WordPress Core</span>',
        '<span class="tech">PHP 8.x</span>',
        '<span class="tech">Modern JavaScript</span>',
        '<span class="skill">RESTful APIs</span>',
        '<span class="tech">MySQL Optimization</span>',
        '<span class="skill">Cross-browser</span>',
        '<span class="keyword">Non-profit</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Responsive Design</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">Performance</span>',
        '<span class="keyword">Digital Solutions</span>',
        '<span class="skill">Debugging</span>',
        '<span class="tech">Git Workflow</span>'
    ],
    'ProZ.com': [
        '<span class="role">Full Stack Dev</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Platform Architecture</span>',
        '<span class="keyword">Global Network</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Full-stack</span>',
        '<span class="keyword">Million Users</span>',
        '<span class="tech">JavaScript ES6</span>',
        '<span class="skill">API Integration</span>',
        '<span class="tech">Bootstrap 4</span>',
        '<span class="skill">Security</span>',
        '<span class="keyword">Translation Tech</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">System Optimization</span>'
    ],
    'Ministerio de Producción de la Provincia de Bs As': [
        '<span class="role">Full Stack Lead</span>',
        '<span class="tech">Laravel 8.x</span>',
        '<span class="tech">REST API</span>',
        '<span class="skill">Security</span>',
        '<span class="keyword">Government</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="skill">Database Design</span>',
        '<span class="keyword">Public Records</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Authentication</span>',
        '<span class="tech">Vue.js 3</span>',
        '<span class="skill">API Design</span>',
        '<span class="keyword">Public Sector</span>',
        '<span class="tech">Git</span>',
        '<span class="skill">Testing</span>'
    ],
    'Optimous': [
        '<span class="role">Full-stack Dev</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">RESTful APIs</span>',
        '<span class="keyword">Enterprise</span>',
        '<span class="tech">JavaScript ES6</span>',
        '<span class="skill">Web Apps</span>',
        '<span class="keyword">Custom Solutions</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Frontend Dev</span>',
        '<span class="tech">Bootstrap 4</span>',
        '<span class="skill">Backend Dev</span>',
        '<span class="keyword">Client Projects</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">System Integration</span>'
    ],
    'Le Utopik': [
        '<span class="role">E-commerce Lead</span>',
        '<span class="tech">Web Development</span>',
        '<span class="skill">Database Management</span>',
        '<span class="keyword">Retail</span>',
        '<span class="tech">E-commerce Platform</span>',
        '<span class="skill">Performance Optimization</span>',
        '<span class="keyword">Online Sales</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Digital Marketing</span>',
        '<span class="tech">Analytics</span>',
        '<span class="skill">SEO Strategy</span>',
        '<span class="keyword">Business Growth</span>',
        '<span class="tech">Responsive Design</span>',
        '<span class="skill">UX/UI</span>'
    ],
    'El Misti Hostels & Pousadas': [
        '<span class="role">Tech Manager</span>',
        '<span class="tech">WordPress</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Database Admin</span>',
        '<span class="keyword">Hospitality</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Web Development</span>',
        '<span class="keyword">Brazil</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">CMS Management</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">System Maintenance</span>',
        '<span class="keyword">Tourism Tech</span>',
        '<span class="tech">Responsive Design</span>',
        '<span class="skill">Technical Support</span>'
    ],
    'Universidad de la República': [
        '<span class="role">Professor</span>',
        '<span class="tech">Digital Archives</span>',
        '<span class="skill">Education</span>',
        '<span class="keyword">Academic</span>',
        '<span class="tech">Web Development</span>',
        '<span class="skill">Curriculum Design</span>',
        '<span class="keyword">Higher Education</span>',
        '<span class="tech">Database Systems</span>',
        '<span class="skill">Research</span>',
        '<span class="keyword">Uruguay</span>',
        '<span class="tech">Content Creation</span>',
        '<span class="skill">Digital Literacy</span>',
        '<span class="keyword">University</span>',
        '<span class="tech">Web Technologies</span>',
        '<span class="skill">Teaching</span>'
    ],
    'Universia': [
        '<span class="role">Tech Lead</span>',
        '<span class="tech">Web Development</span>',
        '<span class="skill">Database Architecture</span>',
        '<span class="keyword">Education Tech</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Team Leadership</span>',
        '<span class="keyword">Global Network</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Platform Development</span>',
        '<span class="keyword">Spain</span>',
        '<span class="tech">CMS Systems</span>',
        '<span class="skill">System Integration</span>',
        '<span class="keyword">Digital Education</span>',
        '<span class="tech">Web Standards</span>',
        '<span class="skill">Technical Architecture</span>'
    ],
    'Amnistía Internacional': [
        '<span class="role">Web Manager</span>',
        '<span class="tech">CMS Development</span>',
        '<span class="skill">Content Strategy</span>',
        '<span class="keyword">Human Rights</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Digital Strategy</span>',
        '<span class="keyword">Global NGO</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Platform Management</span>',
        '<span class="keyword">Advocacy</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">Web Development</span>',
        '<span class="keyword">Non-profit</span>',
        '<span class="tech">Responsive Design</span>',
        '<span class="skill">Digital Campaigns</span>'
    ],
    'Bit Sistemas': [
        '<span class="role">Tech Assistant</span>',
        '<span class="tech">Development Support</span>',
        '<span class="skill">Technical Support</span>',
        '<span class="keyword">IT Services</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">System Maintenance</span>',
        '<span class="keyword">Software Solutions</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Implementation</span>',
        '<span class="keyword">Spain</span>',
        '<span class="tech">Web Technologies</span>',
        '<span class="skill">Technical Support</span>',
        '<span class="keyword">IT Support</span>',
        '<span class="tech">HTML/CSS</span>',
        '<span class="skill">Development</span>'
    ]
};

// Smooth scroll for navigation links
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

// Add experience-card class to all experience cards
document.querySelectorAll('#experience .bg-white').forEach(card => {
    card.classList.add('experience-card');
});

// Create keyword bubbles on mouse move or touch over experience cards
document.querySelectorAll('.experience-card').forEach(card => {
    let lastBubbleTime = 0;
    const bubbleInterval = 300;
    let activeBubbles = 0;
    const maxBubbles = 5;
    const colorReference = document.querySelector('.color-reference');
    let touchTimeout;
    let isTouching = false;
    let lastTouchY = 0;
    let isScrolling = false;
    let referenceTimeout;

    // Get company name from the card
    const titleText = card.querySelector('h3').textContent;
    const companyName = titleText.split(' - ')[0].trim();
    const keywords = experienceKeywords[companyName] || [];

    const showColorReference = () => {
        colorReference.classList.add('visible');
        // Clear any existing timeout
        if (referenceTimeout) {
            clearTimeout(referenceTimeout);
        }
        // Set new timeout to hide after 5 seconds
        referenceTimeout = setTimeout(() => {
            colorReference.classList.remove('visible');
        }, 5000);
    };

    const hideColorReference = () => {
        // Only hide if we're not touching
        if (!isTouching) {
            colorReference.classList.remove('visible');
            if (referenceTimeout) {
                clearTimeout(referenceTimeout);
            }
        }
    };

    const createBubble = (x, y) => {
        if (isScrolling) return; // Don't create bubbles while scrolling
        
        const now = Date.now();
        if (now - lastBubbleTime < bubbleInterval || activeBubbles >= maxBubbles) return;
        lastBubbleTime = now;

        // Create keyword bubble
        const bubble = document.createElement('div');
        bubble.className = 'code-bubble';
        
        // Check if we're on mobile
        const isMobile = window.innerWidth <= 768;
        
        // Calculate bubble position based on touch position
        if (isMobile) {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.width / 2;
            const relativeX = x - cardRect.left;
            
            // Position bubble on the opposite side of the touch
            if (relativeX > cardCenter) {
                // Touch is on the right side, show bubble on the left
                bubble.style.left = (x - 120) + 'px';
                bubble.style.setProperty('--random-x', '-0.5');
            } else {
                // Touch is on the left side, show bubble on the right
                bubble.style.left = (x + 20) + 'px';
                bubble.style.setProperty('--random-x', '0.5');
            }
        } else {
            bubble.style.left = x + 'px';
            bubble.style.setProperty('--random-x', (Math.random() * 2 - 1).toFixed(1));
        }
        
        bubble.style.top = y + 'px';
        
        // Only create bubble if we have keywords for this company
        if (keywords.length > 0) {
            bubble.innerHTML = keywords[Math.floor(Math.random() * keywords.length)];
            
            // Simplified random dispersion with more vertical movement on mobile
            if (isMobile) {
                bubble.style.setProperty('--random-y', (Math.random() * 1.5 + 0.5).toFixed(1));
            } else {
                bubble.style.setProperty('--random-y', (Math.random() * 1.2).toFixed(1));
            }
            
            card.appendChild(bubble);
            activeBubbles++;

            // Create subtle ripple
            const ripple = document.createElement('div');
            ripple.className = 'water-ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            card.appendChild(ripple);

            // Remove elements after animation
            setTimeout(() => {
                bubble.remove();
                ripple.remove();
                activeBubbles--;
            }, isMobile ? 4000 : 3000);
        }
    };

    // Mouse events
    card.addEventListener('mouseenter', showColorReference);
    card.addEventListener('mouseleave', hideColorReference);
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createBubble(x, y);
    });

    // Touch events
    card.addEventListener('touchstart', (e) => {
        isTouching = true;
        isScrolling = false;
        lastTouchY = e.touches[0].clientY;
        showColorReference();
        
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // Create initial bubble
        createBubble(x, y);
        
        // Start continuous bubble creation
        touchTimeout = setInterval(() => {
            if (!isTouching || isScrolling) {
                clearInterval(touchTimeout);
                return;
            }
            const touch = e.touches[0];
            const rect = card.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            createBubble(x, y);
        }, 300);
    });

    card.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        
        const touch = e.touches[0];
        const currentY = touch.clientY;
        const deltaY = Math.abs(currentY - lastTouchY);
        
        // If the touch movement is primarily vertical, consider it scrolling
        if (deltaY > 5) {
            isScrolling = true;
            clearInterval(touchTimeout);
            return;
        }
        
        lastTouchY = currentY;
        
        const rect = card.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        createBubble(x, y);
    });

    card.addEventListener('touchend', () => {
        isTouching = false;
        isScrolling = false;
        hideColorReference();
        clearInterval(touchTimeout);
    });

    card.addEventListener('touchcancel', () => {
        isTouching = false;
        isScrolling = false;
        hideColorReference();
        clearInterval(touchTimeout);
    });
}); 