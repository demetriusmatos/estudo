let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//setInterval(next, 10000) (caso queria ligar o auto rolagem)
// ref: https://www.youtube.com/watch?v=I8nZqx0tfTg&ab_channel=CrislainePaula