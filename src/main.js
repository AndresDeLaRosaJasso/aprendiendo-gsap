import { gsap } from "gsap";

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