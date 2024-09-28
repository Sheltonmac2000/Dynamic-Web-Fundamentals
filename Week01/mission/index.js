const body = document.body;
const themeSelector = document.querySelector(".theme-options select");

const lightImage = document.getElementById("light-mode-image");
const darkImage = document.getElementById("dark-mode-image");

// Load saved theme

themeSelector.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    changeTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
})


themeSelector.addEventListener("change", (event) => {
  const selectedTheme = event.target.value;
  changeTheme(selectedTheme);
  // Save the selected theme in localStorage
  localStorage.setItem("theme", selectedTheme);
});


// This function will change the theme between dark and light
function changeTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark");
        body.classList.remove("light");

        darkImage.style.display = "block";
        lightImage.style.display = "none";

    } else {
        body.classList.add("light");
        body.classList.remove("dark");

        darkImage.style.display = "none";
        lightImage.style.display = "block";
         
    }
}

// changeTheme("dark");
console.log("You have changed the theme to dark!");

