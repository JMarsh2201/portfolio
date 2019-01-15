import './style.css';
import 'jquery';

const $window = $(window)
const $doc = $(document)
const windowHeight = $window.height() * 1.1

$window.on('scroll', revealOnScroll)




function revealOnScroll() {
  const scrolled = $window.scrollTop();
  $(".revealOnScroll:not(.animated)").each(function () {
    let $this = $(this),
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
      $(this).removeClass("animated fadeIn fadeInDown fadeInUp fadeInLeft fadeInRight slideInRight zoomIn")
      console.log($(this))
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
  let cards = $(".card");
  if (n > cards.length) {slideIndex = 1}
  if (n < 1) {slideIndex = cards.length}
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[slideIndex-1].style.display = "block";
}

let next = document.getElementById('next')
let prev = document.getElementById('prev')
console.log(next, prev)

next.addEventListener("click", plusSlides)
prev.addEventListener("click", plusSlides)
