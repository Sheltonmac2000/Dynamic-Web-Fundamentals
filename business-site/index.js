 

// Toggle between showing and hiding the sidebar when clicking the menu icon. Uses conditional statements to check if the sidebar is open or closed. 
// If it is open, it will hide it. If it is closed, it will show it.

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


// Team member data object. Add new team members here when needed.

const teamMembers = [
  {
    name: "Alberto Tovela",
    role: "CEO & Founder",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    image: "images/team1.jpeg",
  },
  {
    name: "John Doe",
    role: "General Director",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    image: "images/team2.jpeg",
  },
  {
    name: "Rachel Tovela",
    role: "Secretary",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    image: "images/team3.jpeg",
  },
];


// Function to display team members
function displayTeamMembers() {
    const teamContainer = document.getElementById('team-members');
    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = "w3-col l3 m6 w3-margin-bottom";

        memberDiv.innerHTML = `
            <div class="w3-card">
                <img src="${member.image}" alt="${member.name}" style="width:100%">
                <div class="w3-container">
                    <h3>${member.name}</h3>
                    <p class="w3-opacity">${member.role}</p>
                    <p>${member.description}</p>
                    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                </div>
            </div>
        `;
        teamContainer.appendChild(memberDiv);
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', displayTeamMembers);