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
      container.appendChild(img);
  }

  // resources toggle 

  // step 1 . make the function to toggle
  function toggResources() {
    // add visible function to each 
    const videoToggle = document.getElementById("video-resources");
    // console.log("hi");
    const articleToggle = document.getElementById("article-gallery");
    // make a css file that will toggle the links to be visible or not
    // change visibility from on to off
    videoToggle.classList.toggle("visible");
    // this should make it so that when one is visible the other isnt
    if(videoToggle.classList == true){
      // if video resources are off written is on
      articleToggle.classList.add("written-visible");
  }
  else{
    // otherwise written is off 
    articleToggle.classList.add("visible");
  }
  }

  // add event listener on click to toggle button 
  document.querySelector("#toggle-button").addEventListener("click", toggResources);

  // connect to the html


  // checkbox 

  function subscribeAlert() {
    // grab the checkbox
    let check = document.getElementById('#sub-checkbox');
    // this line 85 is messed up
    if (check.checked) {
      // insert Thank you into the header
      document.querySelector("#subscribe-header").innerHTML = 'Thank You!';
        // alert("Thank You!");
    } else {
      // sadness for my broken code
      console.log(':(');
    }
}
// click listener for checkbox to run function
document.querySelector("#subscribe-check").addEventListener("click", subscribeAlert);

// function to submit email

function clearInput(){
  const getValue= document.getElementById("email");
    if (getValue.value !="") {
        getValue.value = "";
    }
    alert("Thank You!");
}

document.querySelector('#enter-button').addEventListener("click", clearInput);