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