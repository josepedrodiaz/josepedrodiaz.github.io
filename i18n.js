// Simple i18n system for bilingual portfolio
class I18n {
    // IANA timezones of Spanish-speaking regions — geo fallback when the
    // browser doesn't declare Spanish (e.g. an English-set browser in LatAm).
    static SPANISH_TIMEZONES = new Set([
        // Argentina (canonical subzones + legacy aliases)
        'America/Argentina/Buenos_Aires', 'America/Argentina/Cordoba', 'America/Argentina/Salta',
        'America/Argentina/Jujuy', 'America/Argentina/Tucuman', 'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja', 'America/Argentina/San_Juan', 'America/Argentina/Mendoza',
        'America/Argentina/San_Luis', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Ushuaia',
        'America/Buenos_Aires', 'America/Cordoba', 'America/Mendoza', 'America/Catamarca', 'America/Jujuy',
        // Uruguay, Paraguay, Chile, Bolivia, Peru, Ecuador
        'America/Montevideo', 'America/Asuncion', 'America/Santiago', 'America/Punta_Arenas',
        'Pacific/Easter', 'America/La_Paz', 'America/Lima', 'America/Guayaquil', 'Pacific/Galapagos',
        // Colombia, Venezuela
        'America/Bogota', 'America/Caracas',
        // Mexico (all zones)
        'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey',
        'America/Matamoros', 'America/Chihuahua', 'America/Ciudad_Juarez', 'America/Ojinaga',
        'America/Mazatlan', 'America/Bahia_Banderas', 'America/Hermosillo', 'America/Tijuana',
        // Central America & Spanish Caribbean
        'America/Guatemala', 'America/Tegucigalpa', 'America/El_Salvador', 'America/Managua',
        'America/Costa_Rica', 'America/Panama', 'America/Havana', 'America/Santo_Domingo',
        'America/Puerto_Rico',
        // Spain & Equatorial Guinea
        'Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary', 'Africa/Malabo',
    ]);

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

        // Check browser languages (the whole list, not just the primary one)
        const langs = (navigator.languages && navigator.languages.length)
            ? navigator.languages
            : [navigator.language || ''];
        if (langs.some(l => l.toLowerCase().startsWith('es'))) {
            return 'es';
        }

        // Geo fallback: a visitor in a Spanish-speaking timezone (e.g. an
        // English-set browser physically in Argentina) should still get Spanish.
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
            if (I18n.SPANISH_TIMEZONES.has(tz)) {
                return 'es';
            }
        } catch (e) { /* Intl not available */ }

        return 'en';
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
            localStorage.setItem('preferred-language', this.currentLang);
            this.updateContent();
        });
    }

    switchLanguage(lang) {
        if (!['en', 'es'].includes(lang)) return;
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
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
