
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






