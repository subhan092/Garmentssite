const header =document.querySelector("header");
window.addEventListener("scroll",function () {
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

oncllick =() =>{
    menu.classList.toggle('bx bx-x');
    navmenu.classList.toggle('open');
}