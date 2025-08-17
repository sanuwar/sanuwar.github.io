// Force show all navigation items and allow wrapping
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for the greedy nav to initialize
  setTimeout(function() {
    const greedyNav = document.querySelector('.greedy-nav');
    const visibleLinks = document.querySelector('.greedy-nav .visible-links');
    const hiddenLinks = document.querySelector('.greedy-nav .hidden-links');
    const toggle = document.querySelector('.greedy-nav .greedy-nav__toggle');
    
    if (greedyNav) {
      greedyNav.style.flexWrap = 'wrap';
      greedyNav.style.justifyContent = 'center';
    }
    
    if (visibleLinks) {
      visibleLinks.style.flexWrap = 'wrap';
      visibleLinks.style.justifyContent = 'center';
      visibleLinks.style.width = 'auto';
    }
    
    if (hiddenLinks) {
      hiddenLinks.style.display = 'flex';
      hiddenLinks.style.position = 'static';
      hiddenLinks.style.visibility = 'visible';
      hiddenLinks.style.opacity = '1';
      hiddenLinks.style.transform = 'none';
      hiddenLinks.style.background = 'transparent';
      hiddenLinks.style.border = 'none';
      hiddenLinks.style.boxShadow = 'none';
      hiddenLinks.style.padding = '0';
      hiddenLinks.style.margin = '0';
      hiddenLinks.style.flexWrap = 'wrap';
      hiddenLinks.style.justifyContent = 'center';
      
      // Make sure all hidden link items are visible
      const hiddenItems = hiddenLinks.querySelectorAll('li');
      hiddenItems.forEach(function(item) {
        item.style.display = 'inline-flex';
      });
    }
    
    // Hide the "More" toggle button
    if (toggle) {
      toggle.style.display = 'none';
    }
    
    // Make links smaller to fit better
    const allLinks = document.querySelectorAll('.greedy-nav a');
    allLinks.forEach(function(link) {
      link.style.padding = '0.3rem 0.4rem';
      link.style.fontSize = '0.85em';
    });
    
  }, 100); // Small delay to ensure greedy nav has initialized
});

// Also run on window resize
window.addEventListener('resize', function() {
  setTimeout(function() {
    const hiddenLinks = document.querySelector('.greedy-nav .hidden-links');
    const toggle = document.querySelector('.greedy-nav .greedy-nav__toggle');
    
    if (hiddenLinks) {
      hiddenLinks.style.display = 'flex';
      hiddenLinks.style.position = 'static';
      hiddenLinks.style.visibility = 'visible';
      hiddenLinks.style.opacity = '1';
    }
    
    if (toggle) {
      toggle.style.display = 'none';
    }
  }, 50);
});