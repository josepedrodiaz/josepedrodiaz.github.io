// Language Switcher is now handled by i18n.js

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

// Experience keywords for each position (structured format)
const experienceKeywords = {
    'Radish Lab': {
        role: ['Web Developer'],
        tech: ['WordPress Core', 'PHP 8.x', 'Modern JavaScript', 'Laravel', 'MySQL', 'jQuery', 'HTML5/CSS3', 'Git Workflow', 'Sage Root'],
        skill: ['RESTful APIs', 'Responsive Design', 'Full-stack', 'Performance', 'Debugging'],
        context: ['Non-profit', 'Digital Solutions']
    },
    'ProZ.com': {
        role: ['Full Stack Dev'],
        tech: ['PHP 7.x', 'MySQL', 'jQuery', 'JavaScript ES6', 'Bootstrap 4', 'AJAX'],
        skill: ['Platform Architecture', 'Full-stack', 'API Integration', 'Security', 'System Optimization'],
        context: ['Global Network', 'Million Users', 'Translation Tech']
    },
    'Ministerio de Producción de la Provincia de Bs As': {
        role: ['Full Stack Lead'],
        tech: ['Laravel 8.x', 'REST API', 'PHP 7.x', 'MySQL', 'Vue.js 3', 'Angular', 'Git'],
        skill: ['Security', 'Database Design', 'Authentication', 'API Design', 'Testing', 'Frontend Dev', 'System Integration'],
        context: ['Government', 'Public Records', 'Public Sector']
    },
    'Optimous': {
        role: ['Full-stack Dev'],
        tech: ['PHP 7.x', 'MySQL', 'JavaScript ES6', 'jQuery', 'Bootstrap 4', 'AJAX'],
        skill: ['RESTful APIs', 'Web Apps', 'Frontend Dev', 'Backend Dev', 'System Integration'],
        context: ['Enterprise', 'Custom Solutions', 'Client Projects']
    },
    'Le Utopik': {
        role: ['E-commerce Lead'],
        tech: ['Web Development', 'E-commerce Platform', 'PHP/MySQL', 'JavaScript', 'Analytics', 'Responsive Design'],
        skill: ['Database Management', 'Performance Optimization', 'Digital Marketing', 'SEO Strategy', 'UX/UI'],
        context: ['Retail', 'Online Sales', 'Business Growth']
    },
    'El Misti Hostels & Pousadas': {
        role: ['Tech Manager'],
        tech: ['WordPress', 'PHP/MySQL', 'jQuery', 'MySQL', 'HTML5/CSS3', 'Responsive Design'],
        skill: ['Database Admin', 'Web Development', 'CMS Management', 'System Maintenance', 'Technical Support'],
        context: ['Hospitality', 'Brazil', 'Tourism Tech']
    },
    'Universidad de la República': {
        role: ['Professor'],
        tech: ['Digital Archives', 'Web Development', 'Database Systems', 'Content Creation', 'Web Technologies'],
        skill: ['Education', 'Curriculum Design', 'Research', 'Digital Literacy', 'Teaching'],
        context: ['Academic', 'Higher Education', 'Uruguay', 'University']
    },
    'Universia': {
        role: ['Tech Lead'],
        tech: ['Web Development', 'PHP/MySQL', 'JavaScript', 'CMS Systems', 'Web Standards'],
        skill: ['Database Architecture', 'Team Leadership', 'Platform Development', 'System Integration', 'Technical Architecture'],
        context: ['Education Tech', 'Global Network', 'Spain', 'Digital Education']
    },
    'Amnistía Internacional': {
        role: ['Web Manager'],
        tech: ['CMS Development', 'PHP/MySQL', 'JavaScript', 'HTML5/CSS3', 'Responsive Design'],
        skill: ['Content Strategy', 'Digital Strategy', 'Platform Management', 'Web Development', 'Digital Campaigns'],
        context: ['Human Rights', 'Global NGO', 'Advocacy', 'Non-profit']
    },
    'Bit Sistemas': {
        role: ['Tech Assistant'],
        tech: ['Development Support', 'PHP/MySQL', 'JavaScript', 'Web Technologies', 'HTML/CSS'],
        skill: ['Technical Support', 'System Maintenance', 'Implementation', 'Development'],
        context: ['IT Services', 'Software Solutions', 'Spain', 'IT Support']
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
        { name: 'ROLE', key: 'role', class: 'role' },
        { name: 'TECHNOLOGIES', key: 'tech', class: 'tech' },
        { name: 'SKILLS', key: 'skill', class: 'skill' },
        { name: 'CONTEXT', key: 'context', class: 'context' }
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
            <span class="button-text">Expand</span>
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
        buttonText.textContent = 'Collapse';
    } else {
        // Collapse
        section.classList.remove('expanded');
        section.classList.add('collapsed');
        button.classList.remove('expanded');
        buttonText.textContent = 'Expand';
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
