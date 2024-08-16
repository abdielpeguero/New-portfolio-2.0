// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('loading_Page');
    const hasVisited = localStorage.getItem('hasVisited');
    const heroAnimationPlayed = localStorage.getItem('heroAnimationPlayed');

    // Check if the user has visited the page before
    if (!hasVisited) {
        // User has not visited before, show preloader
        preloader.style.display = 'flex: ';

        // Timeline for the loading animation
        const loadingTimeline = gsap.timeline();
        loadingTimeline
            .from('#ap_logo_preloader1', { duration: 1, opacity: 0, scale: 0.3 })
            .to('loadingPage', { duration: 1, opacity: 0, display: 'none', onComplete: hidePreloader }) ; 

        // Mark that the user has now visited the page
        localStorage.setItem('hasVisited', 'true');
    } else {
        // User has visited before, hide preloader
        preloader.style.display = 'none';
    }

    // Function to hide the preloader
    function hidePreloader() {
        preloader.style.display = 'none';
    }

    // Check if the hero animation has been played before
    if (heroAnimationPlayed) {

        const navbar = document.querySelector('.navbar_master_container');
    
        // GSAP Animation: slide from top and fade in
        gsap.from(navbar, {
            duration: 1,       // Animation duration
            y: -100,           // Start off-screen above the viewport
            opacity: 0,        // Start fully transparent
            ease: "power2.out" // Easing function
        });
        


        // Timeline for the hero section
        const heroTimeline = gsap.timeline({ ScrollReveal: {
            trigger: '.hero',
        }});
        heroTimeline
            .from('.hero', { duration: 0.5, opacity: 0, y: 30 })
            .from('.portfolio_profile_pic', { duration: 0.3, opacity: 0, y: -50 })
            .from('.greetings', { duration: 0.3, opacity: 0, y: 50 })
            .from('.short_bio', { duration: 0.3, opacity: 0, y: 50 })
            .from('.primary_button', { duration: 0.3, opacity: 0 });


        // Mark that the hero animation has been played
        localStorage.setItem('heroAnimationPlayed', 'true');
    }

    // Timeline for the projects section
    const projectsTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.my_projects',
        start: 'top 90%'
    }});
    projectsTimeline
        .from('.my_projects', { duration: 1, opacity: 0, y: 30 })
        .from('.project_heading', { duration: 1, opacity: 0, y: 50 })
        .from('.my_projects_container', { duration: 1, opacity: 0, y: 50 })
        .from('.projects_duet_wrap', { duration: 1, opacity: 1, y: 50 });

    // Timeline for the "Let's work together" section
    const workTogetherTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.lets_work_together',
        start: 'top 80%'
    }});
    workTogetherTimeline
        .from('.available_for_work', { duration: 1, opacity: 0, x: -50 })
        .from('.get_your_project_running', { duration: 1, opacity: 0, x: 50 }, '-=0.5');
});

// Navbar navigation settings

document.addEventListener('DOMContentLoaded', function() {
    // Select the navbar items
    const navHome = document.getElementById('nav_home');
    const navProjects = document.getElementById('nav_projects');
    const navAbout = document.getElementById('nav_about');

    // Add event listeners for each nav item
    navHome.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateToPage('home.html');
    });

    navProjects.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('projects.html');
    });

    navAbout.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('about.html');
    });

    // Function to navigate to the specified page
    function navigateToPage(page) {
        window.location.href = page; // Navigate to the specified page
    }
});



// AP Logo Interaction
document.addEventListener('DOMContentLoaded', function() {

    const apLogo = document.getElementById('ap_logo');

    // Add a click event listener for AP Logo
    apLogo.addEventListener('click', function(event) {
        event.preventDefault(); //Prevent default anchor behavior
        navigateToPage('home.html');
    });

    //function to navigate to homepage
    function navigateToPage(page) {
        window.location.href = page; //Navigate to homepage
    }
});




// Get the scroll up arrow element
const scrollUpArrow = document.querySelector('.scroll_up_arrow_container');

// Add a click event listener to the scroll up arrow
scrollUpArrow.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Smooth scroll to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get the scroll down arrow element
const scrollDownArrow = document.querySelector('.scroll_down_arrow_container');

// Add a click event listener to the scroll down arrow
scrollDownArrow.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Smooth scroll to my project section
    window.scrollTo({
        top: '1800',
        behavior: 'smooth'
    });
});


