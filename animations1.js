// Declare variable for navbar animation
const navbar = document.querySelector('.navbar_master_container');

// play navbar animation
gsap.from(navbar, {
    duration: 1,       // Animation duration
    y: -100,           // Start off-screen above the viewport
    opacity: 0,        // Start fully transparent
    ease: "power2.out" // Easing function
});