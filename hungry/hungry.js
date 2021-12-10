let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
}

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}


document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}



$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
});


const buyBtn = document.querySelector('.btn');
const buyBtn2 = document.querySelector('.btn2');
const buyBtn3 = document.querySelector('.btn3');
const buyBtn4 = document.querySelector('.btn4');
const buyBtn5 = document.querySelector('.btn5');
const buyBtn6 = document.querySelector('.btn6');
const buyBtn7 = document.querySelector('.btn7');
const buyBtn8 = document.querySelector('.btn8');
const buyBtn9 = document.querySelector('.btn9');
const buyBtn10 = document.querySelector('.btn10');
const buyBtn11 = document.querySelector('.btn11');
const buyBtn12 = document.querySelector('.btn12');
const buyBtn13 = document.querySelector('.btn13');
const buyBtn14 = document.querySelector('.btn14');
const buyBtn15 = document.querySelector('.btn15');
const okBtn = document.querySelector('.ok-btn');
const popupBox = document.querySelector('.pop-up-overlay');

buyBtn.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn2.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn3.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn4.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn5.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn6.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn7.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn8.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn9.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn10.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn11.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn12.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn14.addEventListener('click',() => {
  popupBox.classList.add('active')
})

buyBtn15.addEventListener('click',() => {
  popupBox.classList.add('active')
})

okBtn.addEventListener('click', () => {
  popupBox.classList.remove('active')
})




function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
        setInterval(loader, 3000); //3000 = 3s
}

window.onload = fadeOut;