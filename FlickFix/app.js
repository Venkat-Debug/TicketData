



// Change the background color of the navbar when the user scrolls down
window.onscroll = function() {
  var navbar = document.querySelector("nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#202020";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}

// Smooth scroll to section when clicking on navbar links
var navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});


  
  // Change the color of the navbar links on mouseenter and mouseleave
  navLinks.forEach(function(link) {
  link.addEventListener("mouseenter", function() {
  this.style.color = "#ffcc00";
  });
  link.addEventListener("mouseleave", function() {
  this.style.color = "";
  });
  });
  
  // Change the text color of the h1 element on mouseover and mouseout
  var heading = document.querySelector("h3");
  heading.addEventListener("mouseover", function() {
  this.style.color = "#ffcc00";
  });
  heading.addEventListener("mouseout", function() {
  this.style.color = "";
  });
  
  var heading = document.querySelector("p");
  heading.addEventListener("mouseover", function() {
  this.style.color = "#ffcc00";
  });
  heading.addEventListener("mouseout", function() {
  this.style.color = "";
  });
  
  // Change the text of the button element on double click
  var button = document.querySelector("button");
  button.addEventListener("dblclick", function() {
  this.textContent = "Button double-clicked!";
  });
  
  // Change the font size of the body element on keydown and keyup
  var body = document.querySelector("body");
  body.addEventListener("keydown", function() {
  this.style.fontSize = "18px";
  });
  body.addEventListener("keyup", function() {
  this.style.fontSize = "";
  });
  
  // Change the background color of the nav element on focus and blur
  var nav = document.querySelector("nav");
  nav.addEventListener("focus", function() {
  this.style.backgroundColor = "#ffcc00";
  });
  nav.addEventListener("blur", function() {
  this.style.backgroundColor = "";
  });
  
  // Change the border color of the input element on input and change
  var input = document.querySelector("input");
  input.addEventListener("input", function() {
  this.style.borderColor = "#ffcc00";
  });
  input.addEventListener("change", function() {
  this.style.borderColor = "";
  });

  