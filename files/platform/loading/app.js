function setBackgroundUrl() {
    const iframe = document.getElementById('bg-iframe');
    if (!iframe) return;
    if (typeof nextclient !== 'undefined' && typeof nextclient.getBackgroundUrl === 'function') {
        try {
            const url = nextclient.getBackgroundUrl();
            if (url) iframe.src = url;
        } catch (e) {}
    }
}

function showAdPopup() {
    const container = document.getElementById('ad-popup-container');
    const iframe = document.getElementById('ad-popup-iframe');
    const closeBtn = document.getElementById('ad-popup-close');
    if (!container || !iframe || !closeBtn) return;
    if (typeof nextclient === 'undefined' || typeof nextclient.getAdPopupUrl !== 'function') return;
    try {
        const url = nextclient.getAdPopupUrl();
        if (url && url.length > 0) {
            iframe.src = url;
            container.classList.add('visible');
            container.setAttribute('aria-hidden', 'false');
        }
    } catch (e) {}
}

function hideAdPopup() {
    const container = document.getElementById('ad-popup-container');
    const iframe = document.getElementById('ad-popup-iframe');
    if (container) {
        container.classList.remove('visible');
        container.setAttribute('aria-hidden', 'true');
    }
    if (iframe) iframe.src = 'about:blank';
}

function initAdPopup() {
    const closeBtn = document.getElementById('ad-popup-close');
    const container = document.getElementById('ad-popup-container');
    if (closeBtn) closeBtn.addEventListener('click', hideAdPopup);
    if (container) container.addEventListener('click', function(e) {
        if (e.target === container || e.target.classList.contains('ad-popup-backdrop')) hideAdPopup();
    });
    setTimeout(showAdPopup, 500);
    setTimeout(showAdPopup, 1500);
    setTimeout(showAdPopup, 3000);
}

function init() {
    setBackgroundUrl();
    setTimeout(setBackgroundUrl, 150);
    setTimeout(setBackgroundUrl, 500);
    initAdPopup();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
