// Experience keywords for each position
const experienceKeywords = {
    'Radish Lab': [
        '<span class="role">Web Developer</span>',
        '<span class="tech">WordPress</span>',
        '<span class="tech">PHP</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">REST APIs</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Cross-browser</span>',
        '<span class="keyword">Non-profit</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Responsive</span>',
        '<span class="tech">HTML5</span>',
        '<span class="tech">CSS3</span>',
        '<span class="skill">Performance</span>',
        '<span class="keyword">Digital</span>',
        '<span class="skill">Debugging</span>'
    ],
    'ProZ.com': [
        '<span class="role">Developer</span>',
        '<span class="tech">PHP</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Platform</span>',
        '<span class="keyword">Translation</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Full-stack</span>',
        '<span class="keyword">Million users</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">API Integration</span>',
        '<span class="tech">Bootstrap</span>',
        '<span class="skill">Security</span>',
        '<span class="keyword">Global</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">Optimization</span>'
    ],
    'Ministerio de Producción de la Provincia de Bs As': [
        '<span class="role">Full Stack</span>',
        '<span class="tech">Laravel</span>',
        '<span class="tech">REST</span>',
        '<span class="skill">Security</span>',
        '<span class="keyword">Government</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Database</span>',
        '<span class="keyword">Records</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Authentication</span>',
        '<span class="tech">Vue.js</span>',
        '<span class="skill">API Design</span>',
        '<span class="keyword">Public</span>',
        '<span class="tech">Git</span>',
        '<span class="skill">Testing</span>'
    ],
    'Optimous': [
        '<span class="role">Full-stack</span>',
        '<span class="tech">PHP</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">REST</span>',
        '<span class="keyword">Clients</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Web Apps</span>',
        '<span class="keyword">Systems</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Frontend</span>',
        '<span class="tech">Bootstrap</span>',
        '<span class="skill">Backend</span>',
        '<span class="keyword">Solutions</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">Integration</span>'
    ],
    'Le Utopik': [
        '<span class="role">Ecommerce</span>',
        '<span class="tech">Web Dev</span>',
        '<span class="skill">Database</span>',
        '<span class="keyword">Manager</span>',
        '<span class="tech">Platform</span>',
        '<span class="skill">Optimization</span>',
        '<span class="keyword">Online</span>',
        '<span class="tech">Systems</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Marketing</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Analytics</span>',
        '<span class="keyword">Sales</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">SEO</span>'
    ],
    'El Misti Hostels & Pousadas': [
        '<span class="role">Tech Manager</span>',
        '<span class="tech">WordPress</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Database</span>',
        '<span class="keyword">Hostels</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Web Dev</span>',
        '<span class="keyword">Brazil</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">CMS</span>',
        '<span class="tech">HTML5</span>',
        '<span class="skill">Maintenance</span>',
        '<span class="keyword">Tourism</span>',
        '<span class="tech">CSS3</span>',
        '<span class="skill">Support</span>'
    ],
    'Universidad de la República': [
        '<span class="role">Professor</span>',
        '<span class="tech">Teaching</span>',
        '<span class="skill">Education</span>',
        '<span class="keyword">Uruguay</span>',
        '<span class="tech">Digital</span>',
        '<span class="skill">Archives</span>',
        '<span class="keyword">University</span>',
        '<span class="tech">Database</span>',
        '<span class="skill">Curriculum</span>',
        '<span class="keyword">Academic</span>',
        '<span class="tech">Web</span>',
        '<span class="skill">Research</span>',
        '<span class="keyword">Students</span>',
        '<span class="tech">Content</span>',
        '<span class="skill">Development</span>'
    ],
    'Universia': [
        '<span class="role">Tech Lead</span>',
        '<span class="tech">Web Dev</span>',
        '<span class="skill">Database</span>',
        '<span class="keyword">Spain</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Management</span>',
        '<span class="keyword">Education</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Platform</span>',
        '<span class="keyword">Global</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Integration</span>',
        '<span class="keyword">Network</span>',
        '<span class="tech">CMS</span>',
        '<span class="skill">Architecture</span>'
    ],
    'Amnistía Internacional': [
        '<span class="role">Web Manager</span>',
        '<span class="tech">CMS</span>',
        '<span class="skill">Content</span>',
        '<span class="keyword">NGO</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Management</span>',
        '<span class="keyword">Human Rights</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Platform</span>',
        '<span class="keyword">Global</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Integration</span>',
        '<span class="keyword">Advocacy</span>',
        '<span class="tech">HTML</span>',
        '<span class="skill">Development</span>'
    ],
    'Bit Sistemas': [
        '<span class="role">Assistant</span>',
        '<span class="tech">Support</span>',
        '<span class="skill">Development</span>',
        '<span class="keyword">Spain</span>',
        '<span class="tech">PHP</span>',
        '<span class="skill">Maintenance</span>',
        '<span class="keyword">Systems</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Technical</span>',
        '<span class="keyword">IT</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Support</span>',
        '<span class="keyword">Software</span>',
        '<span class="tech">HTML</span>',
        '<span class="skill">Implementation</span>'
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

    // Get company name from the card
    const titleText = card.querySelector('h3').textContent;
    const companyName = titleText.split(' - ')[0].trim();
    const keywords = experienceKeywords[companyName] || [];

    const showColorReference = () => {
        colorReference.classList.add('visible');
    };

    const hideColorReference = () => {
        colorReference.classList.remove('visible');
    };

    const createBubble = (x, y) => {
        if (isScrolling) return; // Don't create bubbles while scrolling
        
        const now = Date.now();
        if (now - lastBubbleTime < bubbleInterval || activeBubbles >= maxBubbles) return;
        lastBubbleTime = now;

        // Create keyword bubble
        const bubble = document.createElement('div');
        bubble.className = 'code-bubble';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        
        // Only create bubble if we have keywords for this company
        if (keywords.length > 0) {
            bubble.innerHTML = keywords[Math.floor(Math.random() * keywords.length)];
            
            // Check if we're on mobile
            const isMobile = window.innerWidth <= 768;
            
            // Simplified random dispersion with more vertical movement on mobile
            if (isMobile) {
                bubble.style.setProperty('--random-x', (Math.random() * 1 - 0.5).toFixed(1));
                bubble.style.setProperty('--random-y', (Math.random() * 1.5 + 0.5).toFixed(1));
            } else {
                bubble.style.setProperty('--random-x', (Math.random() * 2 - 1).toFixed(1));
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