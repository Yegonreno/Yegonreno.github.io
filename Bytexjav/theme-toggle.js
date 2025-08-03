document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  btn && btn.addEventListener('click', function() {
    let current = html.classList.contains('theme-dark') ? 'dark' : 'light';
    let next = current === 'dark' ? 'light' : 'dark';
    html.classList.remove('theme-' + current);
    html.classList.add('theme-' + next);
    localStorage.setItem('color-preference', next);
    if (icon) {
      icon.innerHTML = next === 'dark'
        ? '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>'
        : '<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }
  });

  if (icon && html.classList.contains('theme-dark')) {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>';
  }
});
