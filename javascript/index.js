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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
  
const hiddenElements = document.querySelectorAll('.hidden') ;
hiddenElements.forEach((el) => observer.observe(el));

const footer = document.querySelector('.contact')
footer.addEventListener('click', function () {
  navIcon.classList.toggle('open');
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
})