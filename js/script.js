var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.navbar a');

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link =>{
    link.addEventListener('click', (e) =>{
        indicator(e.target);
    })
})


// clip-patch
var navbar = document.querySelector('.header .navbar');
var btnBars = document.querySelector('#btn-bars');

btnBars.addEventListener('click', showClippatch);

function showClippatch() {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}