const navbar = document.querySelector(".nav-bar");
const nav = document.querySelector("nav");
const projectImage = document.querySelector(".project-photo photo");
const hamburger = document.querySelector(".hamburger");
const hero_p = document.querySelector(".hero-content p");
const hero_big = document.querySelector(".hero-content h3");
const txt = document.querySelector(".text");
const messageBtn = document.querySelectorAll(".message-btn");
const closeBtn = document.querySelector(".btn-close");
const formContainer = document.querySelector(".form-container");

var text;
let i=0;
text = 'Full-Stack Developer'
function moveText(){
  if(i<text.length){
    hero_p.innerHTML += text[i]
    i++
  }
}
setInterval(()=>{
  moveText()
},100)
hamburger.addEventListener('click', (e)=>{
  if(hamburger.classList.contains('close')){
    nav.style.transition = 'all 1s ease';
    nav.style.transform = 'translateY(-50vh)';
    hamburger.classList.remove('close')
  }else{
    nav.style.transition = 'all 1s ease';
    nav.style.transform = 'translateY(4vh)';
    hamburger.classList.toggle('close')
  }
})
closeBtn.addEventListener('click', ()=>{
  formContainer.style.transition = 'all 2s ease'
  formContainer.style.transform = 'translateY(-110%)'
  messageBtn.forEach((btn)=>{
    btn.style.transform = 'translateX(0%)'
    btn.style.opacity = 1
  })
})
messageBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      formContainer.style.transform = 'translateY(0%)'
      btn.style.transition = 'all 2s ease'
      btn.style.transform = 'translateX(-250%)'
      btn.style.opacity = 0 
    })
})
window.addEventListener('load',()=>{
  hero_p.style.transition = 'all 2s ease';
  hero_p.style.transform = 'translateY(0vh)'
  hero_big.style.transition = 'all 2s ease';
  hero_big.style.transform = 'translateY(0vh)';
  navbar.style.transition = 'all 3s ease';
  navbar.style.opacity = 1
  hero_big.style.opacity = 1
})
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 540){
    navbar.style.transition = 'all 2s ease';
    navbar.style.backgroundColor = '#EEEEEE';
  }else{
    navbar.style.backgroundColor = 'transparent';
  }
})


