interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public id: number
  ) {}
}

const reviews: Review[] = [];

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  if (!bookList) return;

  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList.appendChild(bookDiv);
}

function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 1);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, 2);

displayBook(book1);
displayBook(book2);

addReview(1, 5, "Amazing adventure!");
addReview(2, 5, "Epic fantasy masterpiece!");