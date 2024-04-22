
gsap.registerPlugin(ScrollTrigger);

gsap.from('.one-text',{delay : 1.5, opacity :0,
y :-50})
gsap.from('.mv',{x :-150,delay : .2,})
gsap.from('.about',{ y :100,delay :.5,opacity : 0})
gsap.from('.contact',{x:150,delay: 1})
gsap.from('.des',{x:1100,delay:1 ,scrollTrigger :".verse"})
gsap.from('.four',{opacity:0,delay :1.8, scrollTrigger : '.intro'})
gsap.from('.pp',{rotation:-360,opacity:0,ease:'bounce-out',delay:1, scrollTrigger: '.intro' })

