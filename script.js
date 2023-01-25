let search = document.querySelector(".search");
let clear = document.querySelector(".clear");

        search.onclick = function() {
            document.querySelector(".left_hero").classList.toggle('active')
        }
        clear.onclick = function() {
            document.getElementById("search").value = "";
        }

// hamburger code
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //Swiper JS
{/* <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script> */}

// Slider code
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });