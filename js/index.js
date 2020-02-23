window.onscroll = function() {stickyBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}