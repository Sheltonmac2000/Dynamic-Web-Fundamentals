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
      "A simple yet delicious fall dessert, great with vanilla ice cream.",
    image: "images/choc-chip.jpg",
  },

  {
    name: "Peach Cobbler",
    rating: 4,
    tags: ["Dessert", "Peach"],
    description:
      "A simple yet delicious fall dessert, great with vanilla ice cream.",
    image: "images/peach-cobbler.jpg",
  },

  {
    name: "Banana Smoothie",
    rating: 4,
    tags: ["Smoothies", "Fruit"],
    description:
      "A simple yet delicious fall dessert, great with vanilla ice cream.",
    image: "images/banana-smoothie.webp",
  },
];

function getRandomListEntry(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
  return tags.map((tag) => `<li>${tag}</li>`).join("");
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? "⭐" : "☆";
  }
  return html + "</span>";
}

// This will show the random recipe on the page
function renderRecipes(recipeList) {
  const main = document.querySelector("main");
  main.innerHTML = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

init();


function filterRecipes(query) {
  return recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const tagMatch = recipe.tags.find((tag) =>
      tag.toLowerCase().includes(query)
    );
    const descMatch = recipe.description.toLowerCase().includes(query);
    return nameMatch || tagMatch || descMatch;
  });
}

document.querySelector("#searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.querySelector("#searchInput").value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
});