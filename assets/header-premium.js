(function() {
  const HEADER_SELECTOR = '.header-wrapper--premium';
  const header = document.querySelector(HEADER_SELECTOR);
  if (!header) return;

  const overlayOn = () => header.classList.add('has-overlay');
  const overlayOff = () => header.classList.remove('has-overlay');

  // Manage overlay state: when any mega menu <details> is open or search modal open
  const menus = header.querySelectorAll('header-menu details.mega-menu');
  const searchModal = header.querySelector('.search-spotlight details, .header__search details');

  function updateOverlay() {
    const anyOpen = Array.from(menus).some(d => d.open) || (searchModal && searchModal.open);
    if (anyOpen) overlayOn(); else overlayOff();
  }

  menus.forEach(d => {
    d.addEventListener('toggle', updateOverlay);
    // Hover intent on desktop
    let openTo;
    const summary = d.querySelector('summary');
    if (!summary) return;
    summary.addEventListener('mouseenter', () => {
      clearTimeout(openTo);
      openTo = setTimeout(() => { d.open = true; updateOverlay(); }, 120);
    });
    d.addEventListener('mouseleave', () => {
      clearTimeout(openTo);
      setTimeout(() => { d.open = false; updateOverlay(); }, 200);
    });
  });

  if (searchModal) {
    searchModal.addEventListener('toggle', updateOverlay);
  }

  // Close on ESC when overlay is active
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menus.forEach(d => d.open = false);
      if (searchModal) searchModal.open = false;
      overlayOff();
    }
  });

  // Click on scrim closes
  const scrim = header.querySelector('.header-scrim');
  if (scrim) {
    scrim.addEventListener('click', () => {
      menus.forEach(d => d.open = false);
      if (searchModal) searchModal.open = false;
      overlayOff();
    });
  }
})();

