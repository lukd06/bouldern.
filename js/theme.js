function applyThemeStyles() {
    const body = document.querySelector('body');
    const pathSelector = 'svg:nth-child(1) > g:nth-child(3) > g:nth-child(1) > path:nth-child(1)';
    const pathElements = document.querySelectorAll(pathSelector);
  
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.setAttribute('data-bs-theme', 'dark');
      pathElements.forEach((pathElement) => {
        pathElement.style.fill = '#212529';
        pathElement.style.border = 'none';
      });
    } else {
      body.setAttribute('data-bs-theme', 'light');
      pathElements.forEach((pathElement) => {
        pathElement.style.fill = '#FFFF';
        pathElement.style.border = 'none';
      });
    }
  }
  
  function observeDomChanges() {
    const target = document.body;
    const config = { childList: true, subtree: true };
  
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          applyThemeStyles();
        }
      }
    });
  
    observer.observe(target, config);
  }
  
  applyThemeStyles();
  observeDomChanges();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    applyThemeStyles();
  });
  