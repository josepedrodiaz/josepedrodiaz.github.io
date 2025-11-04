// Language Switcher
document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
    const langLabels = document.querySelectorAll('.lang-label');

    if (langSwitch) {
        langSwitch.addEventListener('change', function() {
            if (!this.checked) {
                // Switch to English
                window.location.href = '../index.html';
            }
        });
    }

    // Update active label styling
    langLabels.forEach(label => {
        label.addEventListener('click', function() {
            const isEnglish = this.textContent === 'EN';
            if (isEnglish) {
                window.location.href = '../index.html';
            }
        });
    });
});

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

// Experience keywords for each position (Spanish version)
const experienceKeywords = {
    'Radish Lab': [
        '<span class="role">Desarrollador Web</span>',
        '<span class="tech">WordPress Core</span>',
        '<span class="tech">PHP 8.x</span>',
        '<span class="tech">JavaScript Moderno</span>',
        '<span class="skill">APIs RESTful</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Diseño Responsive</span>',
        '<span class="keyword">Sin Fines de Lucro</span>',
        '<span class="tech">jQuery</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">Rendimiento</span>',
        '<span class="tech">Flujo Git</span>',
        '<span class="skill">Depuración</span>',
        '<span class="skill">Full-stack</span>',
        '<span class="keyword">Soluciones Digitales</span>',
        '<span class="keyword">Sage Root</span>',
        '<span class="tech">Laravel</span>',
    ],
    'ProZ.com': [
        '<span class="role">Dev Full Stack</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Arquitectura de Plataforma</span>',
        '<span class="keyword">Red Global</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Full-stack</span>',
        '<span class="keyword">Millón de Usuarios</span>',
        '<span class="tech">JavaScript ES6</span>',
        '<span class="skill">Integración API</span>',
        '<span class="tech">Bootstrap 4</span>',
        '<span class="skill">Seguridad</span>',
        '<span class="keyword">Tecnología de Traducción</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">Optimización de Sistemas</span>'
    ],
    'Ministerio de Producción de la Provincia de Bs As': [
        '<span class="role">Líder Full Stack</span>',
        '<span class="tech">Laravel 8.x</span>',
        '<span class="tech">REST API</span>',
        '<span class="skill">Seguridad</span>',
        '<span class="keyword">Gobierno</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="skill">Diseño de Base de Datos</span>',
        '<span class="keyword">Registros Públicos</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Autenticación</span>',
        '<span class="tech">Vue.js 3</span>',
        '<span class="skill">Diseño de API</span>',
        '<span class="keyword">Sector Público</span>',
        '<span class="tech">Git</span>',
        '<span class="skill">Testing</span>',
        '<span class="tech">Angular</span>',
        '<span class="skill">Dev Frontend</span>',
        '<span class="tech">Dev Backend</span>',
        '<span class="skill">Integración de Sistemas</span>',
        '<span class="keyword">Sector Público</span>',
        '<span class="tech">Git</span>',
    ],
    'Optimous': [
        '<span class="role">Dev Full-stack</span>',
        '<span class="tech">PHP 7.x</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">APIs RESTful</span>',
        '<span class="keyword">Empresarial</span>',
        '<span class="tech">JavaScript ES6</span>',
        '<span class="skill">Apps Web</span>',
        '<span class="keyword">Soluciones Personalizadas</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Dev Frontend</span>',
        '<span class="tech">Bootstrap 4</span>',
        '<span class="skill">Dev Backend</span>',
        '<span class="keyword">Proyectos de Clientes</span>',
        '<span class="tech">AJAX</span>',
        '<span class="skill">Integración de Sistemas</span>'
    ],
    'Le Utopik': [
        '<span class="role">Líder E-commerce</span>',
        '<span class="tech">Desarrollo Web</span>',
        '<span class="skill">Gestión de Base de Datos</span>',
        '<span class="keyword">Retail</span>',
        '<span class="tech">Plataforma E-commerce</span>',
        '<span class="skill">Optimización de Rendimiento</span>',
        '<span class="keyword">Ventas Online</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Marketing Digital</span>',
        '<span class="tech">Analytics</span>',
        '<span class="skill">Estrategia SEO</span>',
        '<span class="keyword">Crecimiento Empresarial</span>',
        '<span class="tech">Diseño Responsive</span>',
        '<span class="skill">UX/UI</span>'
    ],
    'El Misti Hostels & Pousadas': [
        '<span class="role">Gerente de Tecnología</span>',
        '<span class="tech">WordPress</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Admin de Base de Datos</span>',
        '<span class="keyword">Hospitalidad</span>',
        '<span class="tech">jQuery</span>',
        '<span class="skill">Desarrollo Web</span>',
        '<span class="keyword">Brasil</span>',
        '<span class="tech">MySQL</span>',
        '<span class="skill">Gestión CMS</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">Mantenimiento de Sistemas</span>',
        '<span class="keyword">Tecnología Turística</span>',
        '<span class="tech">Diseño Responsive</span>',
        '<span class="skill">Soporte Técnico</span>'
    ],
    'Universidad de la República': [
        '<span class="role">Profesor</span>',
        '<span class="tech">Archivos Digitales</span>',
        '<span class="skill">Educación</span>',
        '<span class="keyword">Académico</span>',
        '<span class="tech">Desarrollo Web</span>',
        '<span class="skill">Diseño Curricular</span>',
        '<span class="keyword">Educación Superior</span>',
        '<span class="tech">Sistemas de Base de Datos</span>',
        '<span class="skill">Investigación</span>',
        '<span class="keyword">Uruguay</span>',
        '<span class="tech">Creación de Contenido</span>',
        '<span class="skill">Alfabetización Digital</span>',
        '<span class="keyword">Universidad</span>',
        '<span class="tech">Tecnologías Web</span>',
        '<span class="skill">Enseñanza</span>'
    ],
    'Universia': [
        '<span class="role">Líder Tecnológico</span>',
        '<span class="tech">Desarrollo Web</span>',
        '<span class="skill">Arquitectura de Base de Datos</span>',
        '<span class="keyword">Tecnología Educativa</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Liderazgo de Equipo</span>',
        '<span class="keyword">Red Global</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Desarrollo de Plataforma</span>',
        '<span class="keyword">España</span>',
        '<span class="tech">Sistemas CMS</span>',
        '<span class="skill">Integración de Sistemas</span>',
        '<span class="keyword">Educación Digital</span>',
        '<span class="tech">Estándares Web</span>',
        '<span class="skill">Arquitectura Técnica</span>'
    ],
    'Amnistía Internacional': [
        '<span class="role">Gerente Web</span>',
        '<span class="tech">Desarrollo CMS</span>',
        '<span class="skill">Estrategia de Contenido</span>',
        '<span class="keyword">Derechos Humanos</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Estrategia Digital</span>',
        '<span class="keyword">ONG Global</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Gestión de Plataforma</span>',
        '<span class="keyword">Defensa</span>',
        '<span class="tech">HTML5/CSS3</span>',
        '<span class="skill">Desarrollo Web</span>',
        '<span class="keyword">Sin Fines de Lucro</span>',
        '<span class="tech">Diseño Responsive</span>',
        '<span class="skill">Campañas Digitales</span>'
    ],
    'Bit Sistemas': [
        '<span class="role">Asistente Técnico</span>',
        '<span class="tech">Soporte de Desarrollo</span>',
        '<span class="skill">Soporte Técnico</span>',
        '<span class="keyword">Servicios IT</span>',
        '<span class="tech">PHP/MySQL</span>',
        '<span class="skill">Mantenimiento de Sistemas</span>',
        '<span class="keyword">Soluciones de Software</span>',
        '<span class="tech">JavaScript</span>',
        '<span class="skill">Implementación</span>',
        '<span class="keyword">España</span>',
        '<span class="tech">Tecnologías Web</span>',
        '<span class="skill">Soporte Técnico</span>',
        '<span class="keyword">Soporte IT</span>',
        '<span class="tech">HTML/CSS</span>',
        '<span class="skill">Desarrollo</span>'
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
