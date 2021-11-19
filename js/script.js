var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("ciudad");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); }

document.querySelector('.myButton').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.general').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.inicio').style.animation = 'slideshow 24s infinite';
})