// Language Switcher
document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
    const langLabels = document.querySelectorAll('.lang-label');

    if (langSwitch) {
        langSwitch.addEventListener('change', function() {
            if (!this.checked) {
                // Switch to English
                window.location.href = '/index.html';
            } else {
                // Switch back to Spanish (in case we're somehow on EN page)
                window.location.href = '/es/index.html';
            }
        });
    }

    // Update active label styling and handle clicks
    langLabels.forEach(label => {
        label.addEventListener('click', function() {
            const labelText = this.textContent.trim();
            if (labelText === 'EN') {
                window.location.href = '/index.html';
            } else if (labelText === 'ES') {
                window.location.href = '/es/index.html';
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
    'Radish Lab': {
        role: ['Desarrollador Web'],
        tech: ['WordPress Core', 'PHP 8.x', 'JavaScript Moderno', 'Laravel', 'MySQL', 'jQuery', 'HTML5/CSS3', 'Flujo Git', 'Sage Root'],
        skill: ['APIs RESTful', 'Diseño Responsivo', 'Full-stack', 'Rendimiento', 'Depuración'],
        context: ['Sin fines de lucro', 'Soluciones Digitales']
    },
    'ProZ.com': {
        role: ['Desarrollador Full Stack'],
        tech: ['PHP 7.x', 'MySQL', 'jQuery', 'JavaScript ES6', 'Bootstrap 4', 'AJAX'],
        skill: ['Arquitectura de Plataformas', 'Full-stack', 'Integración de APIs', 'Seguridad', 'Optimización de Sistemas'],
        context: ['Red Global', 'Millones de Usuarios', 'Tecnología de Traducción']
    },
    'Ministerio de Producción de la Provincia de Bs As': {
        role: ['Líder Full Stack'],
        tech: ['Laravel 8.x', 'REST API', 'PHP 7.x', 'MySQL', 'Vue.js 3', 'Angular', 'Git'],
        skill: ['Seguridad', 'Diseño de Bases de Datos', 'Autenticación', 'Diseño de APIs', 'Testing', 'Desarrollo Frontend', 'Integración de Sistemas'],
        context: ['Gobierno', 'Registros Públicos', 'Sector Público']
    },
    'Optimous': {
        role: ['Desarrollador Full-stack'],
        tech: ['PHP 7.x', 'MySQL', 'JavaScript ES6', 'jQuery', 'Bootstrap 4', 'AJAX'],
        skill: ['APIs RESTful', 'Aplicaciones Web', 'Desarrollo Frontend', 'Desarrollo Backend', 'Integración de Sistemas'],
        context: ['Empresarial', 'Soluciones Personalizadas', 'Proyectos de Clientes']
    },
    'Le Utopik': {
        role: ['Líder de E-commerce'],
        tech: ['Desarrollo Web', 'Plataforma E-commerce', 'PHP/MySQL', 'JavaScript', 'Analytics', 'Diseño Responsivo'],
        skill: ['Gestión de Bases de Datos', 'Optimización de Rendimiento', 'Marketing Digital', 'Estrategia SEO', 'UX/UI'],
        context: ['Retail', 'Ventas Online', 'Crecimiento Empresarial']
    },
    'El Misti Hostels & Pousadas': {
        role: ['Gerente de Tecnología'],
        tech: ['WordPress', 'PHP/MySQL', 'jQuery', 'MySQL', 'HTML5/CSS3', 'Diseño Responsivo'],
        skill: ['Administración de Bases de Datos', 'Desarrollo Web', 'Gestión de CMS', 'Mantenimiento de Sistemas', 'Soporte Técnico'],
        context: ['Hostelería', 'Brasil', 'Tecnología Turística']
    },
    'Universidad de la República': {
        role: ['Profesor'],
        tech: ['Archivos Digitales', 'Desarrollo Web', 'Sistemas de Bases de Datos', 'Creación de Contenidos', 'Tecnologías Web'],
        skill: ['Educación', 'Diseño Curricular', 'Investigación', 'Alfabetización Digital', 'Enseñanza'],
        context: ['Académico', 'Educación Superior', 'Uruguay', 'Universidad']
    },
    'Universia': {
        role: ['Líder Tecnológico'],
        tech: ['Desarrollo Web', 'PHP/MySQL', 'JavaScript', 'Sistemas CMS', 'Estándares Web'],
        skill: ['Arquitectura de Bases de Datos', 'Liderazgo de Equipos', 'Desarrollo de Plataformas', 'Integración de Sistemas', 'Arquitectura Técnica'],
        context: ['Tecnología Educativa', 'Red Global', 'España', 'Educación Digital']
    },
    'Amnistía Internacional': {
        role: ['Gerente Web'],
        tech: ['Desarrollo CMS', 'PHP/MySQL', 'JavaScript', 'HTML5/CSS3', 'Diseño Responsivo'],
        skill: ['Estrategia de Contenidos', 'Estrategia Digital', 'Gestión de Plataformas', 'Desarrollo Web', 'Campañas Digitales'],
        context: ['Derechos Humanos', 'ONG Global', 'Defensa', 'Sin fines de lucro']
    },
    'Bit Sistemas': {
        role: ['Asistente Técnico'],
        tech: ['Soporte de Desarrollo', 'PHP/MySQL', 'JavaScript', 'Tecnologías Web', 'HTML/CSS'],
        skill: ['Soporte Técnico', 'Mantenimiento de Sistemas', 'Implementación', 'Desarrollo'],
        context: ['Servicios IT', 'Soluciones de Software', 'España', 'Soporte IT']
    }
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

// Function to generate tags HTML for a company
function generateTagsHTML(companyData, companyId) {
    const categories = [
        { name: 'ROL', key: 'role', class: 'role' },
        { name: 'TECNOLOGÍAS', key: 'tech', class: 'tech' },
        { name: 'HABILIDADES', key: 'skill', class: 'skill' },
        { name: 'CONTEXTO', key: 'context', class: 'context' }
    ];

    let html = `
        <div class="tags-section-wrapper collapsed" id="tags-${companyId}">
            <div class="tags-section">
                <div class="tags-grid-container">`;

    categories.forEach(category => {
        const tags = companyData[category.key] || [];
        if (tags.length > 0) {
            html += `
                    <div class="tags-category">
                        <div class="category-header">
                            <span class="category-icon ${category.class}"></span>
                            <span>${category.name}</span>
                            <span class="category-count">${tags.length}</span>
                        </div>
                        <div class="tags-grid">
                            ${tags.map(tag => `<span class="tag-chip ${category.class}">${tag}</span>`).join('')}
                        </div>
                    </div>`;
        }
    });

    html += `
                </div>
            </div>
        </div>
        <button class="toggle-button" onclick="toggleTags('tags-${companyId}', this)">
            <span class="button-text">Expandir</span>
            <i class="fas fa-chevron-down"></i>
        </button>`;

    return html;
}

// Function to toggle tags visibility
function toggleTags(sectionId, button) {
    const section = document.getElementById(sectionId);
    const buttonText = button.querySelector('.button-text');

    if (section.classList.contains('collapsed')) {
        // Expand
        section.classList.remove('collapsed');
        section.classList.add('expanded');
        button.classList.add('expanded');
        buttonText.textContent = 'Contraer';
    } else {
        // Collapse
        section.classList.remove('expanded');
        section.classList.add('collapsed');
        button.classList.remove('expanded');
        buttonText.textContent = 'Expandir';
    }
}

// Initialize tags for all experience cards
document.addEventListener('DOMContentLoaded', () => {
    const experienceCards = document.querySelectorAll('#experience .bg-white');

    experienceCards.forEach(card => {
        const h3 = card.querySelector('h3');
        if (!h3) return;

        const titleText = h3.textContent;
        const companyName = titleText.split(' - ')[0].trim();
        const companyData = experienceKeywords[companyName];

        if (companyData) {
            // Create a safe ID from company name
            const companyId = companyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            // Find the last ul in the card
            const lastUl = card.querySelector('ul:last-of-type');
            if (lastUl) {
                // Insert tags HTML after the ul
                lastUl.insertAdjacentHTML('afterend', generateTagsHTML(companyData, companyId));
            }
        }
    });
});
