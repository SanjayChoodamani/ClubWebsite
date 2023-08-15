// gsap.registerPlugin(ScrollTrigger)

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


const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
  loader.style.display = 'none';
})

document.querySelectorAll("#footer .icons a")[3].href = 'https://twitter.com/MalnadTechClub?t=BMoWx-9alMeyDXBC4-wX6Q&s=09'


// gsap.to('.project-heading' ,{
//   ScrollTrigger: {
//     trigger: ".project",
//     start: 'top 10px',
//   },
//   y:'-100vh'
// })

// gasp.to('.project',{
//   ScrollTrigger: {
//     trigger: ".project",
//     start: 'top 10px',
//   }
// })
