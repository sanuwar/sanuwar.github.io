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

  // Search
  var searchToggle = document.querySelector('.search__toggle');
  var searchContent = document.querySelector('.search-content');
  var searchData = null;

  // Build our own search panel inside .search-content
  if (searchContent) {
    searchContent.innerHTML =
      '<div style="max-width:800px;margin:0 auto;">' +
        '<input type="search" id="site-search-input" placeholder="Type to search..." style="width:100%;font-size:1.1rem;border:none;border-bottom:2px solid #ddd;outline:none;padding:0.4rem 0;background:transparent;" />' +
        '<ul id="site-search-results" style="margin-top:1rem;list-style:none;padding:0;max-height:50vh;overflow-y:auto;"></ul>' +
      '</div>';
  }

  var searchInput = document.getElementById('site-search-input');
  var resultsEl = document.getElementById('site-search-results');

  // Load search index immediately
  fetch('/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) { searchData = data; })
    .catch(function () {});

  function runSearch() {
    if (!searchInput || !resultsEl) return;
    var query = searchInput.value.trim().toLowerCase();
    resultsEl.innerHTML = '';
    if (query.length < 2) return;
    if (!searchData) {
      resultsEl.innerHTML = '<li style="color:#888;padding:0.4rem 0;">Loading index…</li>';
      return;
    }
    var results = searchData.filter(function (item) {
      return (item.title && item.title.toLowerCase().includes(query)) ||
             (item.excerpt && item.excerpt.toLowerCase().includes(query));
    });
    if (results.length === 0) {
      resultsEl.innerHTML = '<li style="color:#888;padding:0.4rem 0;">No results found.</li>';
      return;
    }
    results.slice(0, 8).forEach(function (item) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="' + item.url + '" style="display:block;padding:0.4rem 0;color:#333;text-decoration:none;border-bottom:1px solid #f0f0f0;">' + item.title + '</a>';
      resultsEl.appendChild(li);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keyup', runSearch);
    searchInput.addEventListener('search', runSearch);
  }

  if (searchToggle && searchContent) {
    searchToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      searchContent.classList.toggle('is--visible');
      if (searchContent.classList.contains('is--visible')) {
        if (searchInput) setTimeout(function () { searchInput.focus(); }, 150);
      } else {
        if (searchInput) searchInput.value = '';
        if (resultsEl) resultsEl.innerHTML = '';
      }
    });

    document.addEventListener('click', function (e) {
      if (!searchContent.contains(e.target) && !searchToggle.contains(e.target)) {
        searchContent.classList.remove('is--visible');
        if (searchInput) searchInput.value = '';
        if (resultsEl) resultsEl.innerHTML = '';
      }
    });
  }

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
