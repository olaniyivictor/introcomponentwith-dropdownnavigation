const menuOpenBtn =document.querySelector('.imagerss');
console.log(menuOpenBtn);
const menuCloseBtn =document.querySelector('.imagers')
console.log(menuCloseBtn);
const navLinks = document.querySelector('.nav-links');
console.log(navLinks);
menuOpenBtn.addEventListener('click',function(){
    navLinks.style.right='0';

})
menuCloseBtn.addEventListener('click',function(){
    navLinks.style.right= '-100%'
})

const image =document.querySelector('.htmlcss-imager');
console.log(image);

image.addEventListener('click',function(){
    navLinks.classList.toggle("show1")
})

const images =document.querySelector('.js-imager');
console.log(images);

images.addEventListener('click',function(){
    navLinks.classList.toggle("show3");
})

const features =document.querySelector('.features');
console.log(features);
features.addEventListener('click',function(){
    navLinks.classList.toggle('show1')
})
const companies = document.querySelector('.companies');
console.log(companies);

companies.addEventListener('click',function(){
    navLinks.classList.toggle('show3')
})
