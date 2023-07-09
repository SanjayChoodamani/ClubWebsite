document.addEventListener('DOMContentLoaded', function () {
  var navIcon = document.getElementById('nav-icon1');
  var menu = document.querySelector(".menu-screen");

  navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('open');
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  });
});

function fadeItems() {
  var items = document.getElementsByClassName("menu-items");

  for (var i = 0; i < items.length; i++) {
      setTimeout(function() {
          items[i].classList.add("fadein");
      }, 3000);
  }
}