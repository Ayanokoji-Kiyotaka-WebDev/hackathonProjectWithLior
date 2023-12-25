
// 

window.addEventListener('scroll',()=> {
  
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY > 0)
})




const main = document.querySelectorAll('.cardone');

main.forEach(cardone => {
    cardone.addEventListener('click', () => {
cardone.classList.toggle('open');
    });
});


const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');

navbarToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});