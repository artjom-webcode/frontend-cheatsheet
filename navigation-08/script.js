const burger = document.querySelector('.burger');


function navToggle(e) {
    if(!e.target.classList.contains('active')) {
        e.target.classList.add('active');
        burger.querySelector('.line1').classList.toggle('active');
        burger.querySelector('.line2').classList.toggle('active');
        document.querySelector('.nav-bar').classList.add('active');
        document.querySelector('#logo').classList.add('active');
        document.body.classList.add("hide"); /* Что бы под меню сайт не скроллился.  */
    } else {
        e.target.classList.remove('active');
        burger.querySelector('.line1').classList.toggle('active');
        burger.querySelector('.line2').classList.toggle('active');
        document.querySelector('.nav-bar').classList.remove('active');
        document.querySelector('#logo').classList.remove('active');
        document.body.classList.remove("hide");
    }
}

burger.addEventListener("click", navToggle);
