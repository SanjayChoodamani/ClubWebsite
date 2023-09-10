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

const loading = document.querySelectorAll(".team-card-1 img")
for(i = 0; i<loading.length; i++ ){
  loading[i].setAttribute('loading','lazy')
}
const Gallery = document.querySelectorAll(".gallery img")
for(i = 0; i<Gallery.length; i++ ){
  Gallery[i].setAttribute('loading','lazy')
}

const foot = document.querySelector(".contact a")
foot.href = './contact.html'

const copy = document.querySelector(".copyright p").innerHTML = `Copyright <a href="#"><i class="fa-regular fa-copyright"></i></a> The Malnad Technical Club🚀.`

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

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//       document.body.classList.add('scrolling');
//   } else {
//       document.body.classList.remove('scrolling');
//   }
// });

