 

// Toggle between showing and hiding the sidebar when clicking the menu icon. Uses conditional statements to check if the sidebar is open or closed. 
// If it is open, it will hide it. If it is closed, it will show it.
import { teamMembers } from "./teamData.js";

var mySidebar = document.getElementById("mySidebar");

window.w3_open =  function() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
window.w3_close = function() {
    mySidebar.style.display = "none";
}
 
// w3_close();
// w3_open();

// This will shuffle the industry items and display them randomly after the page loads.
// document.addEventListener("DOMContentLoaded", function () {
//   const items = Array.from(document.querySelectorAll(".industry-item"));

//   // Shuffle the items array
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

//   // Shuffle the items and display the first 4
//   const shuffledItems = shuffle(items).slice(0, 4);
//   shuffledItems.forEach((item) => (item.style.display = "block"));
// });


// Team member data object. Add new team members here when needed.



// This Function will display team members. You can edit the style and html structure from herefunction displayTeamMembers() {



// Slideshow for work section

document.addEventListener("DOMContentLoaded", function () {
  const hiddenItems = document.querySelectorAll(
    "#hidden-industry-items .industry-item"
  );
  const slideshowContainer = document.getElementById("mySlides");

  // Shuffle the hidden items
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledItems = shuffle(Array.from(hiddenItems));

  // Add the shuffled items to the slideshow container
  shuffledItems.forEach((item) => {
    item.style.display = "none"; // Initially hide all items
    slideshowContainer.appendChild(item); // Append items to the slideshow container
  });

  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(n) {
    const slides = document.querySelectorAll("#mySlides .industry-item");
    slides.forEach((slide, index) => {
      slide.style.display = index === n ? "block" : "none"; // Show current slide, hide others
    });
  }

  // Navigation function
  function changeSlide(n) {
    const slides = document.querySelectorAll("#mySlides .industry-item");
    currentSlide = (currentSlide + n + slides.length) % slides.length; // Wrap around
    showSlide(currentSlide);
  }

  // Initialize slideshow
  showSlide(currentSlide);

  // Attach navigation functions to buttons
  window.changeSlide = changeSlide; // Make it accessible globally for the buttons
});

// End of Slideshow

function displayTeamMembers() {
  const teamContainer = document.getElementById("teamGrid"); // Target the team grid div

  // Limit to the first 3 team members
  const displayedMembers = teamMembers.slice(0, 3);

  displayedMembers.forEach((member) => {
    // Create each team member div element dynamically
    const memberDiv = document.createElement("div");
    memberDiv.className =
      "w3-col l4 m6 s12 w3-margin-bottom w3-card w3-round w3-padding-small"; // Simplified card with rounded corners

    memberDiv.innerHTML = `
      <div class="w3-container w3-greyscale"> 
        <img src="${member.image}" alt="${member.name}" class="w3-padding-small w3-margin-bottom " style="width: 100%; height: 75vh; object-fit: cover; border-radius: 8px;"> <!-- Fixed height for consistent images -->
        <h4 class="w3-center">${member.name}</h4>
        <p class="w3-center w3-opacity w3-italic">${member.role}</p>
        <p class="w3-center w3-opacity">${member.description}</p>
      </div>
    `;

    // Append the member div to the team grid container
    teamContainer.appendChild(memberDiv);
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", displayTeamMembers);



