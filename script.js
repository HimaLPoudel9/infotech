const toogle = document.querySelector('.openmenu');
const navContainer = document.querySelector('.nav-container');
const navList = document.querySelector('.nav-list');
const close = document.querySelector('.closemenu');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
console.log(slides);


const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');


toogle.addEventListener('click', function () {
    if(navContainer.classList.contains('invisible')){
        navContainer.classList.remove('invisible');
        navList.classList.remove('invisible');
        navList.classList.add('show');
    }else{
        navContainer.classList.add('invisible');
        navList.classList.add('invisible');
        navList.classList.remove('show');
    }
})

var section = 0;
var slideNumber = 0;


leftArrow.addEventListener('click', function () {
    section = (section > 0) ? section - 1 : 0;
    slideNumber = (slideNumber > 0) ? slideNumber - 1 : 0;
    slides.forEach(slide => {
        slide.classList.remove('current-slide');
    });
    switch (slideNumber) {
        case 0:
            slides[0].classList.add('current-slide');
            break;
        case 1:
            slides[1].classList.add('current-slide');
            break;
        case 2:
            slides[2].classList.add('current-slide');
            break;
    }
    console.log(slideNumber);
});

rightArrow.addEventListener('click', function () {
    section = (section < 2) ? section + 1 : 2;
    slideNumber = (slideNumber < 2) ? slideNumber + 1 : 2;
    console.log(slideNumber);
    slides.forEach(slide => {
        slide.classList.remove('current-slide');
    });
    switch (slideNumber) {
        case 0:
            slides[0].classList.add('current-slide');
            break;
        case 1:
            slides[1].classList.add('current-slide');
            break;
        case 2:
            slides[2].classList.add('current-slide');
            break;
    }
});


