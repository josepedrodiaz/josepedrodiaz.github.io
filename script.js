// Language Switcher is now handled by i18n.js

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Sync language switchers (desktop and mobile)
    const langSwitchDesktop = document.getElementById('langSwitch');
    const langSwitchMobile = document.getElementById('langSwitchMobile');

    if (langSwitchDesktop && langSwitchMobile) {
        langSwitchDesktop.addEventListener('change', (e) => {
            langSwitchMobile.checked = e.target.checked;
        });

        langSwitchMobile.addEventListener('change', (e) => {
            langSwitchDesktop.checked = e.target.checked;
            // Trigger change event on desktop switcher to activate i18n
            langSwitchDesktop.dispatchEvent(new Event('change'));
        });
    }
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

// Profile photo: play AI live-portrait video on hover / tap
document.addEventListener('DOMContentLoaded', () => {
    const ring = document.getElementById('profileRing');
    if (!ring) return;
    const video = ring.querySelector('.profile-video');
    if (!video) return;

    // Desktop only: needs a real pointer with hover. On touch/mobile the
    // video never loads (0 bytes) and the photo keeps its own behavior.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduced || !canHover) return;

    // Load the clip now that we know it's a hover-capable device
    video.src = video.dataset.src;
    video.load();

    const RATE = 2;
    let rafId = null;

    const cancelRewind = () => {
        if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    };

    // Forward: turn to look at you
    const playForward = () => {
        cancelRewind();
        ring.classList.add('is-playing');
        video.playbackRate = RATE;
        const p = video.play();
        if (p) p.catch(() => {}); // ignore autoplay rejections / missing file
    };

    // Reverse: manually rewind currentTime (HTML video can't play backwards natively)
    const rewind = () => {
        cancelRewind();
        video.pause();
        let last = null;
        const step = (ts) => {
            if (last === null) last = ts;
            // cap dt so a frame hiccup never makes it leap to the start
            const dt = Math.min((ts - last) / 1000, 0.05);
            last = ts;
            video.currentTime = Math.max(0, video.currentTime - RATE * dt);
            if (video.currentTime <= 0.03) {
                video.currentTime = 0;
                ring.classList.remove('is-playing'); // fade back to the photo
                rafId = null;
                return;
            }
            rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
    };

    ring.addEventListener('mouseenter', playForward);
    ring.addEventListener('mouseleave', rewind);
});
