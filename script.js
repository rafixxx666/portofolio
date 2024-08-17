

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelector('.intro button').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to contact section with animation
document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Photo click animation
const photoContainer = document.querySelector('.photo-container');

photoContainer.addEventListener('click', function() {
    this.classList.toggle('clicked');
});
