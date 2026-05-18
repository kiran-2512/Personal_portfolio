// Navigation Bar Click Function 
function myFunction(x) {
  x.classList.toggle("change");
  const navBar = document.querySelector('.navigation-bar');
  navBar.classList.toggle('active');
}

//Scroll Functionality 
function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Typewriter Effect Initialization
document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriter-text');
  if (typewriterElement) {
    const typewriter = new Typewriter(typewriterElement, {
      loop: true,
      delay: 75,
      cursor: '|'
    });
    
    typewriter
      .pauseFor(3000)
      .typeString('I am Kiran Gowda M U')
      .pauseFor(5000)
      .deleteAll()
      .start();
  }
});