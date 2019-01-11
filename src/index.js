import './style.css'

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides() {
  if (this.id === 'next') {
    showSlides(slideIndex += 1);
  } else {
    showSlides(slideIndex += -1);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let cards = document.getElementsByClassName("card");
  // let dots = document.getElementsByClassName("dot");
  if (n > cards.length) {slideIndex = 1}
  if (n < 1) {slideIndex = cards.length}
  for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  cards[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

let next = document.getElementById('next')
let prev = document.getElementById('prev')
console.log(next, prev)

next.addEventListener("click", plusSlides)
prev.addEventListener("click", plusSlides)
