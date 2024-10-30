 

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
 

// This will shuffle the industry items and display them randomly after the page loads.
document.addEventListener("DOMContentLoaded", function () {
  const items = Array.from(document.querySelectorAll(".industry-item"));

  // Shuffle the items array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the items and display the first 4
  const shuffledItems = shuffle(items).slice(0, 4);
  shuffledItems.forEach((item) => (item.style.display = "block"));
});