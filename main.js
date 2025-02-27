
function updateHeroGradient() {
  const hero = document.querySelector('.hero');
  let hue = 0;
  setInterval(() => {
    hue = (hue + 1) % 360;
    hero.style.background = `radial-gradient(circle at center, hsla(${hue}, 100%, 50%, 0.1), transparent)`;
  }, 50);
}
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
    teamName: document.getElementById('teamName').value,
    college: document.getElementById('college').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  };
  console.log('Registration submitted:', formData);
  alert('Registration submitted successfully! We will contact you soon.');
  event.target.reset();
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  updateHeroGradient();
});