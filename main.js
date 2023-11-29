let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header li a");


document.addEventListener("scroll" , ()=>{
  const header = document.querySelector('header');
  if(window.scrollY >0 ){
    header.classList.add('scrolled');
  } else{
    header.classList.remove('scrolled');
  }
})

// radwa يا بامميه 
document.querySelectorAll('header li a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // radwa يا بامميه 
    navLink.forEach(link => {
      link.classList.remove('active');
    });

    // radwa يا بامميه 
    this.classList.add('active');
    
    // radwa يا بامميه 
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    // autoHeight: true,
    height: "100",
    pagination: false,
  });
  splide.mount();
});

const btnIcon =document.querySelector(".menu-btn");
const menuBar =document.querySelector('.menu-bar');
btnIcon,addEventListener("click" , ()=>{
  if(menuBar.classList.contains("active")){
    menuBar.classList.remove('active');
    btnIcon.innerHTML = ` <i class="fa-solid fa-bars"></i>`
  } else{
    menuBar.classList.add('active');
    btnIcon.innerHTML = ` <i class="fa-solid fa-xmark"></i>`
  }
 
})

