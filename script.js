const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const formMessage = document.getElementById('formMessage');
        
        if (name && email && subject && message) {
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.className = 'form-message success';

            contactForm.reset();

            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.className = 'form-message error';
        }
    });
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent === 'Learn More') {
            e.preventDefault();
            window.location.href = 'about.html';
       }
    });
});
