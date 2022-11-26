let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('header')
menu.onclick = ()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}           

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
})

// // disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Amaan Ahmad";
            // $("#favicon").attr("href", "img/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            // $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });



const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    interval: 200,
    duration: 1000,
    reset: true
})

sr.reveal('.home-text',{distance:'200px', delay:100,origin:'top'})
sr.reveal('.home-img',{distance:'200px',delay:100,origin:'top'})
// sr.reveal('.heading, .box',{delay:200,origin:'top'})
sr.reveal('.about-title',{delay:200,origin:'left'})
sr.reveal('.about-text',{delay:200,origin:'right'})
var typed = new Typed(".element", {
    strings: ["frontend development.", "backend development.", "web development."],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


// highlight

const sections = document.querySelectorAll('section[id]');
// const nava = document.querySelectorAll('nav .container ul li a')

window.addEventListener('scroll',()=>{
    const scrollY = window.pageXOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        console.log(sectionId)
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight)
        {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.add('active')
        }
        else{
            document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('active')

        }
    })
})