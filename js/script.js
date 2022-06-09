let Burger = document.querySelector('.burger');
let BurgerContent = document.querySelector('.burger__content')
let LineOne = document.querySelector('.line_1')
let LineThree = document.querySelector('.line_3')

let i = 0;

Burger.addEventListener('click', () => {
    LineOne.classList.add('active'),
    LineThree.classList.add('active'),
    i++;
    if (i % 2 == 0) {
        BurgerContent.classList.remove('active');
        LineOne.classList.remove('active');
        LineThree.classList.remove('active');
    } else {
        BurgerContent.classList.add('active')
    }
})

