"use strict";

//render on HTML page using JS
const aboutHeading = "The Story";
let aboutRender = document.querySelector("#about-heading").innerHTML = aboutHeading;


// making an image gallery in js
// image gallery 

//bug my images will load but not with alt text
const images = [
'assets/gallery/01-greens.jpg',
'assets/gallery/02-jacket.jpg',
'assets/gallery/03-purplehat.jpg',
'assets/gallery/04-sock.jpg',
'assets/gallery/05-babyhat.jpg'
];
console.log(images);
// gets image container
  const container = document.getElementById('gallery-box');
// using a loop to go through images i as my iterator
  for (let i = 0; i < images.length; i++) {
    // creates image tag in html for each image
      const img = document.createElement('img');
      // get image source
      img.src = images[i];
      // appends child - adds each image at the end of the array
      let displayImg = container.appendChild(img);
  }

  // should display image
document.querySelector('#gallery-box').innerHTML = displayImg;


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
document.querySelector("#nav-toggle").addEventListener("click", myNav);

