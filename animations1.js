document.addEventListener('DOMContentLoaded', function(){
    // Declare variable for navbar animation
    const navbar = document.querySelector('.navbar_master_container');

    // play navbar animation
    gsap.from(navbar, {
        duration: 1,       // Animation duration
        y: -100,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    });
});

// Project hero animation
document.addEventListener('DOMContentLoaded', function(){

    // Project hero animation variables
    const projectHero = document.querySelector('.project_hero');
    const projectHeadingArrowDown = document.querySelector('.ProjectHeading_ArrowDown');
    const projectScreenMockupsContainer = document.querySelector('.project_screen_mockups_container');

    // Hero and arrow animation
    gsap
    .from(projectHeadingArrowDown, {
        duration: 2,       // Animation duration
        y: -100,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })

    // Screen mockups animation
    gsap
    .from(projectScreenMockupsContainer, {
        duration: 2,       // Animation duration
        delay: 0.5,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })
});


// About me page animations
document.addEventListener('DOMContentLoaded', function(){

    // about me animation variables
    const containerAbout = document.querySelector('.container-about');
    const resumeHero = document.querySelector('.resume_hero');
    const resumeSection = document.querySelector('.resume_section');
    const resumeTitleSection = document.querySelector('.title-section');
    const resumeSkillWrapper = document.querySelector('.my-skills_wrapper');

    // About me section
    gsap
    .from(containerAbout, {
        duration: 2,       // Animation duration
        delay: 0.4,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })

    // Resume Hero
    gsap
    .from(resumeHero, {
        duration: 2,       // Animation duration
        delay: 0.7,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })

    // Resume section
    gsap
    .from(resumeSection, {
        duration: 2,       // Animation duration
        delay: 0.7,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })

    // // Resume title section
    // gsap
    // .from(resumeTitleSection, {
    //     duration: 2,       // Animation duration
    //     delay: 0.7,
    //     y: 50,             // Start off-screen above the viewport
    //     opacity: 0,        // Start fully transparent
    //     ease: "power2.out" // Easing function
    // })

    // Resume skill wrapper
    gsap
    .from(resumeSkillWrapper, {
        duration: 2,       // Animation duration
        delay: 0.7,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power2.out" // Easing function
    })
});



// Project page details and more animations
document.addEventListener('DOMContentLoaded', function(){

    // about me animation variables
    const projectGeneralInfo = document.querySelector('.project_general_information');
    const projectMockups = document.querySelector('.project_mockups');
    const trustedBy = document.querySelector('.trusted_by');
    const testimonies = document.querySelector('.testimonies');


    // Project general info
    gsap
    .from(projectGeneralInfo, {
        duration: 1,       // Animation duration
        y: -50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power3.out" // Easing function
    })

    // Project mockups
    gsap
    .from(projectMockups, {
        duration: 1,       // Animation duration
        y: -50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power3.out" // Easing function
    })

    // Trusted by
    gsap
    .from(trustedBy, {
        duration: 1,       // Animation duration
        delay: 0.7,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power3.out" // Easing function
    })

    // Testimonies
    gsap
    .from(testimonies, {
        duration: 1,       // Animation duration
        delay: 0.9,
        y: 50,           // Start off-screen above the viewport
        opacity: 0,        // Start fully transparent
        ease: "power3.out" // Easing function
    })
});




// Homepage animations
const heroTimeline = gsap.timeline({ ScrollReveal: {
    trigger: '.hero',
}});
heroTimeline
    .from('.hero', { duration: 0.5, opacity: 0, y: 30 })
    .from('.portfolio_profile_pic', { duration: 0.3, opacity: 0, y: -50 })
    .from('.greetings', { duration: 0.3, opacity: 0, y: 50 })
    .from('.short_bio', { duration: 0.3, opacity: 0, y: 50 })
    .from('.primary_button', { duration: 0.3, opacity: 0 });


// Project page animations
const projectsTimeline = gsap.timeline({ scrollTrigger: {
    trigger: '.my_projects',
    start: 'top 90%'
}});
projectsTimeline
    .from('.my_projects', { duration: 1, opacity: 0, y: 30 })
    .from('.my_projects_container', { duration: 1, opacity: 0, y: 50 })
    .from('.projects_duet_wrap', { duration: 1, opacity: 1, y: 50 });

// Lets work together section
const workTogetherTimeline = gsap.timeline({ scrollTrigger: {
    trigger: '.lets_work_together',
    start: 'top 80%'
}});
workTogetherTimeline
    .from('.available_for_work', { duration: 1, opacity: 0, x: -50 })
    .from('.get_your_project_running', { duration: 1, opacity: 0, x: 50 }, '-=0.5');