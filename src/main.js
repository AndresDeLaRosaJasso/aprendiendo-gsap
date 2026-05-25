import { gsap } from "gsap";

gsap.from("#box",{
  duration: 1,
  opacity: 1,
  y: 200,
  
})

/* gsap.to(".box",{
  duration: 2,
  x: 200,
  backgroundColor: 'blue',
  repeat: -1,
  yoyo: true,
  borderRadius: 100,
  rotate: 360,
}) */

/* gsap.fromTo(".box", {
  duration: 3,
  scale: 0,
  borderRadius: 8,
  width: 150
  
},{
  
  scale: 0.65,
  borderRadius: 20,
  width: 800
  
}) */