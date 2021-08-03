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
t1.fromTo('.job-names',{opacity:0},{opacity:1,duration:1});


// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   })