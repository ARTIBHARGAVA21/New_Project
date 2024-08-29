document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.toggle('show');
    });
});
let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

function showSlide(idx) {
    index = (idx + images.length) % images.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 3000);
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate AJAX form submission
    alert("Form submitted successfully via AJAX!");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
