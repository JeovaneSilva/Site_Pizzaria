const AnoAtual = document.querySelector(".AnoAtual")

const ano = new Date()

AnoAtual.innerHTML= ano.getFullYear()


window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

let show = true;
const menuContent = document.querySelector('#header');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on',show);
    show = !show;
});