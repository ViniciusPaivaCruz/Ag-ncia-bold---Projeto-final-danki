/*Script da div -- DEPOIMENTOS*/
const user1 = document.querySelector('.user1');
const user2 = document.querySelector('.user2');
const user3 = document.querySelector('.user3');


const ball2 = document.querySelector('.ball2');
const ball1 = document.querySelector('.ball1');
const ball3 = document.querySelector('.ball3');


ball1.addEventListener('click', function(){
    user1.style.display = 'flex'
    user2.style.display = 'none'
    user3.style.display = 'none'
    ball1.style.backgroundColor = '#255AFF'
    ball2.style.backgroundColor = '#D2D8EB'
    ball3.style.backgroundColor = '#D2D8EB'
})
ball2.addEventListener('click', function(){    
    user1.style.display = 'none'
    user2.style.display = 'flex'
    user3.style.display = 'none'
    ball2.style.backgroundColor = '#255AFF'
    ball3.style.backgroundColor = '#D2D8EB'
    ball1.style.backgroundColor = '#D2D8EB'
});
ball3.addEventListener('click', function(){    
    user1.style.display = 'none'
    user2.style.display = 'none'
    user3.style.display = 'flex'
    ball3.style.backgroundColor = '#255AFF'
    ball2.style.backgroundColor = '#D2D8EB'
    ball1.style.backgroundColor = '#D2D8EB'
});
/*Script da div -- DEPOIMENTOS*/
