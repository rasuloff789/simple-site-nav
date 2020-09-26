
var openButton =document.querySelector('.hamburger');
var openNav =document.querySelector('.sitenav__list');
openButton.addEventListener('click',function(){
openButton.classList.toggle('is-active') ;
openNav.classList.toggle('sitenav__list--open');
});


