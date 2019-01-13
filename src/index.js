import './style.css';
import 'jquery';

const $window = $(window)
const windowHeight = $window.height() * 1.1
$window.on('scroll', revealOnScroll)


function revealOnScroll() {
  const scrolled = $window.scrollTop();
  $(".revealOnScroll:not(.animated)").each(function () {
    let $this     = $(this),
      offsetTop = $this.offset().top;
    if (scrolled + windowHeight > offsetTop) {
      if ($this.data('timeout')) {
        window.setTimeout(function(){
          $this.addClass('animated ' + $this.data('animation'));
        }, parseInt($this.data('timeout'),10));
      } else {
        $this.addClass('animated ' + $this.data('animation'));
        console.log($this)
      }
    }
  });
  $(".revealOnScroll.animated").each(function (index) {
    const $this = $(this), offsetTop = $this.offset().top;
    if (scrolled + windowHeight < offsetTop) {
      $(this).removeClass("animated fadeIn fadeInDown fadeInLeft fadeInRight")
    }
  })

};

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
