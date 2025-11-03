let header = document.getElementById('header');
let title = document.querySelector('.title');
let menu = document.querySelectorAll(".menu ul li a")
let tombolNaik = document.getElementById('tombol-naik')

function scrolHeader() {
    if (window.scrollY > 0){
        header.style.backgroundColor = "#4E56C0";
        header.style.borderBottom = "none";
        title.style.color = "white";
        menu.forEach(
            (element) => {
            element.style.color = "white";    
        });
        tombolNaik.style.display = 'flex';
}else{
   header.style.backgroundColor = "transparent";
   header.style.borderBottom = "1px solid #e0e0e0"; 
   title.style.color = "black";
   menu.forEach(
        (element) => {
        element.style.color = "black";
    });
     tombolNaik.style.display = 'none'
  }
}
window.onscroll = scrolHeader;

let home = document.querySelector('.menu ul li a[href="#home"]');
let about = document.querySelector('.menu ul li a[href="#about"]');
let schoolHistory = document.querySelector('.menu ul li a[href="#School History"]');
let work = document.querySelector('.menu ul li a[href="#work"]');
let tombolNaikLink = document.querySelector('.tombol-naik')

let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('about');
let schoolHistorySection = document.getElementById('School History');
let workSection = document.getElementById('work');
let tombolNaikSection = document.getElementById('home')

function scrollToHome(event){
    event.preventDefault();
    homeSection.scrollIntoView({
        behavior: 'smooth'
    })
}
function scrollToAbout(event){
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    })
}
function scrollToSchoolHistory(event){
    event.preventDefault();
    schoolHistorySection.scrollIntoView({
        behavior: 'smooth'
    })
}
function scrollToWork(event){
    event.preventDefault();
    workSection.scrollIntoView({
        behavior: 'smooth'
    })
}
function scrollToHomeA(event){
    event.preventDefault();
    tombolNaikSection.scrollIntoView({
        behavior: 'smooth'
    })
}

home.addEventListener('click',scrollToHome)
about.addEventListener('click',scrollToAbout)
schoolHistory.addEventListener('click',scrollToSchoolHistory)
work.addEventListener('click',scrollToWork)
tombolNaikLink.addEventListener('click', scrollToHomeA)

// short curt
// tombolNaik.addEventListener('click',function (){
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
let menuBar = document.getElementById('menu-bar')
let sideBarResponsive = document.getElementById('sembunyi')
let close = document.getElementById('close')
let mediaScren = window.matchMedia("(max-width : 768px)")
 
function handleScreenChange(e){
    if (e.matches){
        menuBar.style.display = 'block';
        menuBar.addEventListener('click', function (){
    sideBarResponsive.style.display = 'block';
    menuBar.style.display = 'none';
})
close.addEventListener('click', function (){
    sideBarResponsive.style.display = 'none';
    menuBar.style.display = 'block';
})
    }else{
        sideBarResponsive.style.display = 'none';
        menuBar.style.display = 'none';
    }
}
mediaScren.addEventListener('change',handleScreenChange);
handleScreenChange(mediaScren); 

