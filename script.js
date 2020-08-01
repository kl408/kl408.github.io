/* Credit to Dev Ed for Responsive Navigation Bar Animation */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks  = document.querySelectorAll('.nav-links li');

    //Toggled navigation bar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animated links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1.2}s`;
            }
        });
    });
    
}

navSlide();

/* Typing animation for "Hi, I'm Kristy!" */

/* For several functions:
const app = () => {
    navSlide();
} */