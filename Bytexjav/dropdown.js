document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('dropdownToggle');
  const dropdownList = document.querySelector('.super-navbar__dropdown-list');
  const dropdownIcon = document.getElementById('dropdownIcon');

  let isOpen = false;

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen = !isOpen;
    dropdownList.style.display = isOpen ? 'block' : 'none';

    dropdownIcon.innerHTML = isOpen
      ? '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
      : '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
  });

  document.addEventListener('click', function (e) {
    if (isOpen && !dropdownList.contains(e.target) && !toggleBtn.contains(e.target)) {
      dropdownList.style.display = 'none';
      isOpen = false;
      dropdownIcon.innerHTML =
        '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
    }
  });
// Auto-close on scroll
window.addEventListener('scroll', function () {
  if (isOpen) {
    dropdownList.style.display = 'none';
    isOpen = false;
    dropdownIcon.innerHTML =
      '<line x1="3" y1="12" x2="21" y2="12"></line>' +
      '<line x1="3" y1="6" x2="21" y2="6"></line>' +
      '<line x1="3" y1="18" x2="21" y2="18"></line>';
  }
});
});
