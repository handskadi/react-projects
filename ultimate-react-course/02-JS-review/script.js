const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);

//  Destructuring
const {
  title,
  author,
  genres,
  id,
  pages,
  publicationDate,
  reviews,
  revTitle,
  translations,
  hasMovieAdaptation,
} = book;

const [g1, g2, ...othersG] = genres;

// Spreed operator
const newGenres = [...genres, "MK Genre"];

const updateBoook = {
  ...book,
  // overide property
  hasMovieAdaptation: true,
  // add new property
  madeBy: "Mohamed KADI",
};

// Arrow function
const getYear = (str) => str.split("-")[0];

// Template literals
const summry = ` The Book ${title} was written ${author} with a ${pages}-pages & was published in ${getYear(
  publicationDate
)}`;

// Ternaires
const ternairy = false ? "I am true" : " I am fale";
const summry2 = ` The Book ${title} was written ${author} with a ${pages}-pages & was published in ${getYear(
  publicationDate
)}. The Book has ${hasMovieAdaptation ? "" : "not"} been adapted`;

// Shortcircuiting && || ??
true && "some vlaue";
false || "some vlaue";

hasMovieAdaptation && "This book has a Movie";
book.translations.spanish || "Not Translated";

// Optional chaining ?.
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// Array Methods:
// - Map method
const books = getBooks();

const x = [1, 2, 3, 4, 5, 6].map((item) => item * 2);

const titles = books.map((el) => el.title);
const essetialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  published: getYear(book.publicationDate),
}));

// - Filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

// - Reduce Method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// Sort Method
const arr = [3, 5, 7, 2, 4, 1, 9];
const sorted = arr.slice().sort((a, b) => b - a);

const sortByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((b) => ({ title: b.title, pages: b.pages }));

// Working with immutable arrays:

// 1) Add a book object to array
const newBoook = {
  id: 6,
  title: "Mk Future made by Allah",
  publicationDate: "2024-04-18",
  author: "Mohamed KADI",
  hasMovieAdaptation: false,
  pages: 359,
};

const booksAfterAdd = [...books, newBoook];
booksAfterAdd;

// 2) Delete a book object from an array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
