"use strict";

//render on HTML page using JS
const aboutHeading = "The Story";
let aboutRender = document.querySelector("#about-heading").innerHTML = aboutHeading;



// image gallery

const images = {

}

// list all images in an object as strings

// use map to iterate through each object and render using `${}` TWICE - thanks chad :) 

// render using document query selector

// 


// mobile nav 
function myNav() {
  const x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// connect myNav function to menu icon
document.querySelector("#nav-toggle").addEventListener("click", myNav)
