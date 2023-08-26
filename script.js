const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('.menu a[href="#"]');
    const introductionSection = document.querySelector('#introduction-section');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Calculate the offset of the target section relative to the viewport
        const offset = introductionSection.getBoundingClientRect().top;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: offset + window.scrollY,
            behavior: 'smooth'
        });
    });
});
