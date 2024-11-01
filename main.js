import '../vite-project/src/styles/styles.scss'

let dashboard = document.body.querySelector('.main-header__dasboard');
let headButton = document.body.querySelector('.main-header__button');

let changeBack = function change() {
    headButton.style.backgroundcolor = '#343c6a';
}
headButton.addEventListener('click', function(){
    dashboard.classList.toggle('hide-bar'); 
}) ;

console.log(dashboard);