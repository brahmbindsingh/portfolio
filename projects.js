const t1 = gsap.timeline({default: {ease: "power1.out"}});

t1.to('.text',{y:"0%",duration:1, stagger: .25});
t1.to('.slider',{y: "-100%",duration:1.5,delay:.5});
t1.to('.intro',{y:"-100%",duration:1},"-=1");
t1.fromTo('nav',{opacity:0},{opacity:1,duration:1});
t1.fromTo('section#projects',{opacity:0},{opacity:1,duration:1},"-=.9");