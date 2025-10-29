// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav a');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});





// Animate project cards and contact section on scroll
const cards = document.querySelectorAll(".project-card");
const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transition = "all 1s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });

  const contactRect = contactSection.getBoundingClientRect();
  if (contactRect.top < window.innerHeight - 100) {
    contactSection.style.transition = "all 1s ease";
    contactSection.style.opacity = 1;
    contactSection.style.transform = "translateY(0)";
  }
});

// Scroll reveal animation
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
  projects.forEach((project, index) => {
    const rect = project.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        project.classList.add('reveal');
      }, index * 150); // delay for smooth staggered reveal
    }
  });
});






//  EMAIL VALIDATION + EMAILJS SEND
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('status-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    statusMsg.textContent = 'Please fill in all fields.';
    statusMsg.style.color = 'orange';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    statusMsg.textContent = 'Please enter a valid email address.';
    statusMsg.style.color = 'red';
    return;
  }
  // If valid, send with EmailJS
  emailjs.send('service_zqc88jn', 'template_gil1enm', {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(() => {
      statusMsg.textContent = '✅ Message successfully sent!';
      statusMsg.style.color = '#64ffda';
      form.reset();
    })
    .catch(() => {
      statusMsg.textContent = '❌ Failed to send. Please try again.';
      statusMsg.style.color = 'red';
    });
});
