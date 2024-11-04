 

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



// This Function will display team members. You can edit the style and html structure from here
function displayTeamMembers() {
    const teamContainer = document.getElementById('team-members');
    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = "w3-col l3 m6 w3-margin-bottom team-member-card";

        memberDiv.innerHTML = `
            <div class="w3-card">
                <img id="teamCard" src="${member.image}" alt="${member.name}" style="width:100%">
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