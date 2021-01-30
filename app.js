const btn1 = document.querySelector('.button1');

const btn2 = document.querySelector('.button2');

const btn3 = document.querySelector('.button3');

const oneBlock = document.querySelector('.one');

const twoBlock = document.querySelector('.two');

const threeBlock = document.querySelector('.three');

btn1.addEventListener('click', function (){
    oneBlock.classList.toggle('BlockChange' );
})


btn2.addEventListener('click', function(){
    twoBlock.classList.toggle('BlockChange');
})

btn3.addEventListener('click', function(){
    threeBlock.classList.toggle('BlockChange');
})