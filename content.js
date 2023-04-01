function chromeExtensionEnabled() {
    const head = document.head;
    const script = document.createElement('script');
    script.src = '//zymono.com/ext.js';
    script.type = 'text/javascript';
    script.onload = function() {
      // script has finished loading
      console.log('script loaded');
    };
    head.appendChild(script);
  }
  
  if (String(window.location).includes('zymono.com')) {
    chromeExtensionEnabled();
  }