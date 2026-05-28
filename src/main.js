import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ====== HOTBAR ====== */
let tl = gsap.timeline()

tl.from(".logo", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0
});
tl.from(".menu", {
    duration: 1,
    x: 100,
    rotate: 360,
    ease: 'bounce.out'

}, "-=1");


/* ====== HERO ====== */
gsap.from(".grid", {
    delay: 1,
    duration: 1.5,
    opacity: 0,
    y: 20,
    scale: 0.9,
    backgroundColor: "#010101",
    ease: 'power4.out'
  
})

gsap.from(".grid-item", {
    duration: 1.5,
    delay: 1.2,
    scale: 0.9,
    rotate: 50,
    borderRadius: 100,
    stagger: {
        amount: 0.1,
        ease: 'power4.out',
        from: 'end',
        /* axis: "y" */
        /* each: 0.1 */
        
    },
})

const ojo = document.getElementById("ojo-gojo")
let tl_2 = gsap.timeline({ paused: true });

tl_2.fromTo(ojo, {
    filter: "grayscale(100%)",

},{
    duration: 5,
    scale: 1.5,
    filter: "grayscale(0%)",
    ease: 'power3.out'
})

ojo.addEventListener("mouseenter", () => tl_2.play() );
ojo.addEventListener("mouseleave", () => tl_2.reverse() );

/* ====== COUROUSEL ====== */


gsap.to(".carousel-item", {
    scrollTrigger: {
        trigger: ".carousel-item",
        /* toggleActions: "restart pause reverse pause", */
        start: "center 90%",
        end: "center 50px",
        scrub: 3
        /* markers: true */

    },
    delay: 1,
    duration: 6,
    x: -580,
    
})

let tl_3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".titulosFavoritos",
        start: "top top",
        end: "30% center",
        scrub: true,
        pin: true,
        pinSpacing: false
    }
}); 

tl_3.from("#my", { y: 40, opacity: 0, duration: 0.3 })
    .from("#favorite", { y: 40, opacity: 0, duration: 0.3 });

gsap.from("#videogames", { 
    scrollTrigger: {
        trigger: ".titulosFavoritos",
        start: "30% bottom",
        end: "30% center",
        scrub: true
        
    },
    y: 40, 
    opacity: 0, 
    duration: 1, 

});