let img = document.querySelector('.theimage');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'images/film-slide-00.jpg';
})

btn2.addEventListener('click', () => {
    img.src = 'images/film-slide-01.jpg';
})

btn3.addEventListener('click', () => {
    img.src = 'images/film-slide-02.jpg';
})

btn4.addEventListener('click', () => {
    img.src = 'images/film-slide-03.jpg';
})

btn5.addEventListener('click', () => {
    img.src = 'images/film-slide-04.jpg';
})

