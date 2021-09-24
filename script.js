const d = new Date();
let abhiSaal = d.getFullYear().toString();

let list = document.querySelectorAll(".socialLinks li");
let bg = document.querySelector(".socialMedia");

list.forEach(elements => {
    elements.addEventListener('mouseenter',function(e){
        let color = e.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
    elements.addEventListener('mouseleave',function(e){
        bg.style.backgroundColor = '#fff';
    })
})

let dateWalaArea = document.querySelector("footer .copyright span");
dateWalaArea.innerText = `Brahm Bind Singh © ${abhiSaal}`;

const t1 = gsap.timeline({default: {ease: "power1.out"}});

t1.to('.text',{y:"0%",duration:1, stagger: .25});
t1.to('.slider',{y: "-100%",duration:1.5,delay:.5});
t1.to('.intro',{y:"-100%",duration:1},"-=1");
t1.fromTo('nav',{opacity:0},{opacity:1,duration:1});
// t1.fromTo('.job-names',{opacity:0},{opacity:1,duration:1});
t1.fromTo('.introduction-text',{opacity:0},{opacity:1,duration:2},"-=1");


//navbar on scroll effects

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $("nav").css("background","rgba(255,255,255,.8)");
          $("nav").css("backdropFilter","blur(10px)");
          $(".logo a").css("color","black");
          $(".nav-links li a").css("color" , "black");
          $(".nav-links li a::after").css("border-bottom-color","black");
        }
  
        else{
            $(".logo a").css("color","white");
            $("nav").css("background","rgba(0,0,0,0)");
            $(".nav-links li a").css("color" , "white");  	
            $("nav").css("backdropFilter","blur(0px)");
        }
    })
  })

