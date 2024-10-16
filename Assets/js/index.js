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
})};