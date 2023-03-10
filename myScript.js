//Page Front Slide-Show
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Dark Mode Implementation
(function () {
  document.querySelector(".dark-mode-button").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
//Dark Mode Implementation Ends

//Slides for Reviews
let slides = document.querySelectorAll(".slide-container");
let reviewIndex = 0;

function next() {
  slides[reviewIndex].classList.remove("active");
  reviewIndex = (reviewIndex + 1) % slides.length;
  slides[reviewIndex].classList.add("active");
}
function prev() {
  slides[reviewIndex].classList.remove("active");
  if (reviewIndex == 0) {
    reviewIndex = slides.length;
  }
  reviewIndex = (reviewIndex - 1) % slides.length;
  slides[reviewIndex].classList.add("active");
}
//Slides for Reviews End

//Frequently Asked Questions//
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

//Scroll-Bar
let progress = document.getElementById("progress-bar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
//Scroll-Bar

//Scroll-for-explore-link
const scrollTopBtn = document.querySelector(".link-explore");
scrollTopBtn.addEventListener("click", function () {
  scrollElement.scrollTop -= 250;
});
scrollElement.addEventListener("scroll", () => {
  outputDiv.innerHTML = `scrollTop: ${Math.ceil(scrollElement.scrollTop)}`;
});

//scroll-smmooth-fromW3schools
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
