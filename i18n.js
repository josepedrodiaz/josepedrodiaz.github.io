// Simple i18n system for bilingual portfolio
class I18n {
    constructor() {
        this.translations = null;
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && ['en', 'es'].includes(urlLang)) {
            return urlLang;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && ['en', 'es'].includes(savedLang)) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'es' ? 'es' : 'en';
    }

    async init() {
        try {
            const response = await fetch('./translations.json');
            this.translations = await response.json();
            this.updateContent();
            this.setupLanguageSwitcher();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    updateContent() {
        if (!this.translations) return;

        const t = this.translations[this.currentLang];

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Update all elements with data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = this.getNestedValue(t, key);
            if (value) {
                el.textContent = value;
            }
        });

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', this.currentLang);
        window.history.replaceState({}, '', url);

        // Save preference
        localStorage.setItem('preferred-language', this.currentLang);
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    setupLanguageSwitcher() {
        const switcher = document.getElementById('langSwitch');
        if (!switcher) return;

        // Set initial state
        switcher.checked = this.currentLang === 'es';

        // Add event listener
        switcher.addEventListener('change', (e) => {
            this.currentLang = e.target.checked ? 'es' : 'en';
            this.updateContent();
        });
    }

    switchLanguage(lang) {
        if (!['en', 'es'].includes(lang)) return;
        this.currentLang = lang;
        this.updateContent();
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.i18n = new I18n();
    });
} else {
    window.i18n = new I18n();
}
