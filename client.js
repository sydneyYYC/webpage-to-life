"use strict";

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
'assets/gallery/05-babyhat.jpg',
'assets/gallery/06-coasters.jpg',
'assets/gallery/07-hatombre.jpg',
'assets/gallery/08-scarf.jpg',
'assets/gallery/09-canvas.jpg',
];

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

  // should display images in gallery
  document.querySelector('#gallery-box').innerHTML = displayImg;


  // resources toggle 

  // step 1 . make the function to toggle
  function toggResources() {
    // add visible function to each 
    const videoElement = document.getElementById("videos-gallery");
    // make a css file that will toggle the links to be visible or not
    videoElement.classList.toggle("")
  }

  // add event listener on click to toggle button 

  // change visibility from on to off

  // connect to the html


