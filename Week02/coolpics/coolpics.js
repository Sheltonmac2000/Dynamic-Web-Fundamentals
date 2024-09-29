const button = document.querySelector(".nav-button");
const navLinks = document.querySelectorAll(".nav-links");

function hideLinks(){
    navLinks.forEach(link => {
        link.style.display = "none"; //this will hide the links
    })

}

function showLinks(){
    navLinks.forEach(link => {
        link.style.display = "block"; //this will show the links
    })
}


function toggleLinks(){
    navLinks.forEach((link) => {
      // Check the current display property and toggle it
      if (link.style.display === "none") {
        link.style.display = "inline"; // Show the link
      } else {
        link.style.display = "none"; // Hide the link
      }
    });
}
//Event listerner

button.addEventListener("click", toggleLinks);
// button.addEventListener("click", showLinks);
