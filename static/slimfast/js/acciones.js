let menu = document.querySelector('#menu');
window.onscroll = ()=> {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(scroll > 170){
    menu.classList.remove('navbar-extras');
    menu.classList.add('fixed-top');
  }else{
    menu.classList.remove('fixed-top');
    menu.classList.add('navbar-extras');
  }
}

let sider = document.querySelector('#sidebar-wrapper');
let body = document.querySelector('#cuerpo');

document.querySelector('#menu-close').addEventListener('click', evento =>{
  evento.preventDefault();
  sider.classList.remove('active');
  body.classList.remove('slider_fondo');
}, false);

document.querySelector('#open_menu').addEventListener('click', evento =>{
  evento.preventDefault();
  sider.classList.add('active');
  body.classList.add('slider_fondo');
}, false);

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});