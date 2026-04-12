document.addEventListener('DOMContentLoaded', function () {
  // Custom lightbox for gallery figures
  var lightbox = document.createElement('div');
  lightbox.id = 'custom-lightbox';
  lightbox.innerHTML = '<div id="custom-lightbox-close">&#10005;</div><img id="custom-lightbox-img" src="" alt="" />';
  document.body.appendChild(lightbox);

  var lbImg = document.getElementById('custom-lightbox-img');
  var lbClose = document.getElementById('custom-lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('figure.half a, figure.third a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var img = link.querySelector('img');
      openLightbox(link.href, img ? img.alt : '');
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Click-to-toggle for dropdown menus
  document.querySelectorAll('.masthead__menu-item.has-dropdown').forEach(function (item) {
    item.querySelector('.nav-parent-label').addEventListener('click', function (e) {
      e.stopPropagation();
      item.classList.toggle('open');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.masthead__menu-item.has-dropdown.open').forEach(function (item) {
      item.classList.remove('open');
    });
  });
});
