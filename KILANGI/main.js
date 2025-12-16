// main.js

// simple tab visual state for “Explore Our Timeless Bestseller”
const tabs = document.querySelectorAll('.tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // hook for future: filter products by tab text
  });
});
