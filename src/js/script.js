let plus = document.getElementsByClassName('plus')
let minus = document.getElementsByClassName('minus')
let container = document.getElementById('faq__list')
let clickHandler = function(e){
    if (e.target.classList.contains('plus')){
  
        e.target.parentNode.classList.add('active__item')
e.target.nextElementSibling.style.display = "block";
e.target.previousElementSibling.childNodes[1].style.display = "block"
e.target.style.display = 'none'
     }
     
    else if (e.target.classList.contains('minus')) {
        e.target.parentNode.classList.remove('active__item')
        e.target.previousElementSibling.style.display = "block";
        e.target.previousElementSibling.previousElementSibling.childNodes[1].style.display = 'none'
        e.target.style.display = 'none'
    }
}
container.addEventListener('click',clickHandler);
///
let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
burger.addEventListener('click',function(){
    burger.classList.toggle('active');
    menu.classList.toggle('opened');
})