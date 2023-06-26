const books = [
  {
    title: "Book 1",
    author: "author 1",
    year: 2005,
  },
  {
    title: "Book 2",
    author: "author 2",
    year: 2012,
  },
  {
    title: "Book 3",
    author: "author 3",
    year: 2008,
  },
  {
    title: "Book 4",
    author: "author 4",
    year: 2015,
  },
];
const newArray = books
  .filter((book) => book.year < 2010)
  .map((book) => ({
    ...book,
    author: (() => {
      return book.author.toUpperCase();
    })(),
  }));
console.log(newArray);
