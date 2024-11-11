
// Dynamic text for About

const phrases = [
    "Web Developer",
    "Tech Enthusiast",
    "Full stack Developer",
    "Explorer",
    "Software Developer"
];


const colors = [
  "Aquamarine",
  "Aquamarine",
  "Aquamarine",
  "Aquamarine",
  "Aquamarine",
];

let index = 0;

function updateText() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    dynamicTextElement.textContent = phrases[index];
    dynamicTextElement.style.color = colors[index]; // Change color based on index
    index = (index + 1) % phrases.length; // Cycle through phrases
}

// Initial call to set the first phrase
updateText();

// Change text every 2 seconds
setInterval(updateText, 2000);


// timelibrary for slide

const images = [
    "angular.png",
    "css-3.png",
    "html-5.png",
    "js.png",
    "java.png",
    "mysql.png"
]; // Array of image paths

let counter = 1;
const totalImages = images.length;

setInterval(function() {
    // Get the image element
    const imageElement = document.getElementById("slider-image");
    
    // Update the src of the image element
    imageElement.src = images[counter];
    
    // Increment the counter and reset if it exceeds the total images
    counter = (counter + 1) % totalImages;
}, 3000); // Change image every 3 seconds


