// script.js

// Example: Add a simple alert when the page loads
window.addEventListener('load', () => {
    console.log('Welcome to Mithila Techie!');
});
// Typewriter effect for any element with class "typewriter"
function typeWriter(element, text, delay = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

// Usage:
window.onload = () => {
  const header = document.querySelector('header h1');
  if (header) {
    const fullText = header.textContent;
    header.textContent = ''; // clear existing text
    typeWriter(header, fullText, 120);
  }
};
const colors = ['#00d1ff', '#00ffa3', '#ff0099', '#ffd500'];
const trailCount = 8;

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  trail.style.backgroundColor = colors[i % colors.length];
  document.body.appendChild(trail);
}

const trails = document.querySelectorAll('.cursor-trail');

document.addEventListener('mousemove', (e) => {
  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
    }, index * 50);
  });
});
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const feedback = document.getElementById('feedback').value.trim();
  if(feedback.length === 0) {
    alert("Please write your feedback before submitting.");
    return;
  }
  const mailtoLink = `mailto:craunak409@gmail.com?subject=Anonymous Feedback&body=${encodeURIComponent(feedback)}`;
  window.location.href = mailtoLink;
});
