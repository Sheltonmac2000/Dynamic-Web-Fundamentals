const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Harry Potter and the Cursed Child",
    date: "31 July 2016",
    description:
      "Harry Potter and the Cursed Child follows adult Harry Potter and his son Albus as they grapple with family legacy and the dangers of time travel.",
    imgSrc:
      " https://m.media-amazon.com/images/I/91bUfxdDjWL._AC_UF1000,1000_QL80_.jpg",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },

  {
    id: 3,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
];

const articlesContainer = document.querySelector('.main_body');


function createArticle(item) {
  const newArticle = document.createElement('div');
  newArticle.classList.add('image-container');

const articleContent = `
    <figure>
      <img src="${item.imgSrc}" alt="${item.imgAlt}" class="pop-out_image">
    </figure>
    <h2>${item.genre}</h2>
    <h3>${item.title}</h3>
    <p>Published Date: ${item.date}</p>
    <p>${item.description}</p>
    <p>Ages: ${item.ages}</p>
    <p>Rating: ${item.stars}</p>
  `;

  newArticle.innerHTML = articleContent;
  articlesContainer.appendChild(newArticle);

//   const articles = [{title: 'title', content: 'content', date: 'date'}];

}

articles.forEach(createArticle);