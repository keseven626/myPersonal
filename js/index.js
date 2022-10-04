
const tl = gsap.timeline({defaults: {ease: "power1.out" } } )

 tl.to( ".text", { duration:1.5, y: "-100%",  stagger: 0.5, opacity:1} );
 tl.to( ".intro", { y: "-100%", duration: 1} );
gsap.fromTo(".navbar-brand", { opacity: 0}, {duration: 1.5,opacity: 1});
gsap.to(".nav-link", {duration:1.5, x:-10, opacity: 1}, "-+0.5");


