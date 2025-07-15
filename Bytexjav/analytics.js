
// analytics.js - Google Analytics prefilled script for https://Yegonreno.github.io/

(function(){
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KVCVYL81K7';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-KVCVYL81K7');
})();
