gsap.registerPlugin(ScrollTrigger);

// Home Hero
let home1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cc-home-hero",
    toggleActions: "play none none reverse",
    start: "top 50%"
  }
});
home1.from(
  ".cc-hero",
  {y: "100%", opacity: 0, duration: 0.6, stagger: 0.25},
  0
);

// Arsenal - Trigger 1
let ar1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".arsenal-trigger-1",
    toggleActions: "play none none reverse",
    start: "top 50%",
    end: "bottom 50%"
  }
});
ar1.to(".cc-arsenal-text", {y: "0%", duration: 0.45}, 0);

// Arsenal - Trigger 2
let ar2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".arsenal-trigger-2",
    toggleActions: "play none none reverse",
    start: "top 50%",
    end: "bottom 50%"
  }
});
ar2.to(".cc-arsenal-text", {y: "100%", duration: 0.45}, 0);
ar2.from(".arsenal-image.cc-2", {x: "-7%", opacity: 0, duration: 0.3}, 0);

// Arsenal - Trigger 3
let ar3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".arsenal-trigger-3",
    toggleActions: "play none none reverse",
    start: "top 50%",
    end: "bottom 50%"
  }
});
ar3.to(".cc-arsenal-text", {y: "200%", duration: 0.45}, 0);
ar3.from(".arsenal-image.cc-3", {x: "-7%", opacity: 0, duration: 0.3}, 0);

// Arsenal - Trigger 4
let ar4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".arsenal-trigger-4",
    toggleActions: "play none none reverse",
    start: "top 50%",
    end: "bottom 50%"
  }
});
ar4.to(".cc-arsenal-text", {y: "300%", duration: 0.45}, 0);
ar4.from(".arsenal-image.cc-4", {x: "-7%", opacity: 0, duration: 0.3}, 0);

// Calculate the total width of all elements with the class .gallery-slide
const items = document.querySelectorAll(".gallery-slide");
let totalWidth = 0;

items.forEach((item) => {
  totalWidth += item.offsetWidth; // Use offsetWidth for more accurate width calculation
});

// Create a GSAP timeline
const tl = gsap.timeline({paused: true});

// Animate the gallery to the left by the calculated total width
tl.to(".gallery", {
  x: -(totalWidth - window.innerWidth * 0.4), // Move to the left by the total width
  duration: 1, // Adjust the duration as needed
  ease: "power2.inOut" // You can choose the easing function that fits your animation
});

// Create a ScrollTrigger for the animation
ScrollTrigger.create({
  trigger: ".sticky.cc-gallery", // Element that triggers the animation
  start: "top center", // Start the animation when the top of .gallery hits the center of the viewport
  end: "bottom bottom", // End the animation after scrolling by the total width
  animation: tl, // Use the timeline we created
  scrub: 1 // Scrub the animation
});
