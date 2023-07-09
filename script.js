const menuButton = document.querySelector('.hamburgar-menu');
const menu = document.getElementById('menu');
const nav = document.querySelector('.nav-centerer');
const body = document.querySelector('body');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('open');
    nav.classList.toggle("open");
    body.classList.toggle("open");
  });

  const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('open');
    nav.classList.remove('open');
    body.classList.remove("open");
  });
});