const recipes = [
  {
    name: "Apple Crisp",
    rating: 4,
    tags: ["Dessert", "Fruit"],
    description:
      "A simple yet delicious fall dessert, great with vanilla ice cream.",
    image: "images/apple-crisp.jpg",
  },
  {
    name: "Chocolate Chip Cookies",
    rating: 4,
    tags: ["Dessert", "Chocolate"],
    description:
      "Crispy on the outside, chewy on the inside, loaded with chocolate chips.",
    image: "images/choc-chip.jpg",
  },
  {
    name: "Peach Cobbler",
    rating: 4,
    tags: ["Dessert", "fruit"],
    description:
      "A warm and delicious peach dessert topped with a golden crust.",
    image: "images/peach-cobbler.jpg",
  },
  {
    name: "Banana Smoothie",
    rating: 4,
    tags: ["Smoothies", "Fruit"],
    description: "A refreshing banana smoothie, great for a healthy breakfast.",
    image: "images/banana-smoothie.webp",
  },
];

// This function will return a random recipe  
function getRandomListEntry(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

// THis function will be used to create the recipe template
function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

// Function to display tags
function tagsTemplate(tags) {
  return tags.map((tag) => `<li>${tag}</li>`).join("");
}

// Function to display rating
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? "⭐" : "☆";
  }
  return html + "</span>";
}

// Function to render the recipes on the page
function renderRecipes(recipeList) {
  const main = document.querySelector("main");
  main.innerHTML = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
}

// One random recipe will appear when the page loads/refreshes
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

// Call the init function to load a random recipe when the page is opened
init();

// This function will filter the recipes based on the search 
function filterRecipes(query) {
  return recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const tagMatch = recipe.tags.some((tag) =>
      tag.toLowerCase().includes(query)
    );
    const descMatch = recipe.description.toLowerCase().includes(query);
    return nameMatch || tagMatch || descMatch;
  });
}

// The event listener for the search form
document.querySelector("#searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const query = document.querySelector("#searchInput").value.toLowerCase();
  const filteredRecipes = filterRecipes(query);

  if (filteredRecipes.length > 0) {
    renderRecipes(filteredRecipes); // Show the filtered recipes
  } else {
    document.querySelector("main").innerHTML = "<p>No recipes found.</p>"; // Show message if no results
  }
});
