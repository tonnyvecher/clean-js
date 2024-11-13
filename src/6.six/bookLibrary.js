class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true; // доступность книги
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Книга "${book.title}" добавлена в библиотеку`);
  }

  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);

    if (!book) {
      console.log("Книга с таким ISBN не найдена");
      return;
    }

    if (!book.isAvailable) {
      console.log(`Книга с таким "${book.title}" уже взята`);
      return;
    }

    book.isAvailable = false;
    console.log(`Вы взяли книгу "${book.title}"`);
  }

  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);

    if (!book) {
      console.log("Книга с таким ISBN не найдена.");
      return;
    }

    if (book.isAvailable) {
      console.log(`Книга "${book.title}" уже доступна в библиотеке.`);
      return;
    }

    book.isAvailable = true;
    console.log(`Вы вернули книгу "${book.title}".`);
  }

  listAvailabelBooks() {
    const availabelBooks = this.books.filter((b) => b.isAvailable);

    if (availabelBooks.length === 0) {
      console.log("Все книги заняты");
      return;
    }

    console.log("Список доступных книг:");
    availabelBooks.forEach((book) => {
      console.log(`- "${book.title}" от ${book.author}`);
    });
  }
}

const library = new Library();

const book1 = new Book("Война и мир", "Лев Толстой", "123456");
const book2 = new Book(
  "Преступление и наказание",
  "Федор Достоевский",
  "654321"
);
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", "112233");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAvailabelBooks();

// взять книгу из библиотеки
library.borrowBook("123456");
// еще раз взять ту же книгу
library.borrowBook("123456");

library.listAvailabelBooks();

library.returnBook("123456");

library.listAvailabelBooks();
