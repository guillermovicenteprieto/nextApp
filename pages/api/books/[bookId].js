import { books } from "../../../src/data.js";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      getBook(req, res);
      break;
    case "PUT":
      updateBook(req, res);
      break;
    case "DELETE":
      deleteBook(req, res);
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}

  const getBook = (req, res) => {
    const { bookId } = req.query;
    const book = books.find((book) => book.id == bookId);
    if (!book)
      res.status(404).json({ message: `Book with id ${bookId} not found` });
    res.status(200).json(book);
  };

  const updateBook = (req, res) => {
    const { bookId } = req.query;
    const book = books.find((book) => book.id == bookId);
    if (!book)
      res.status(404).json({ message: `Book with id ${bookId} not found` });
    const { name, author } = req.body;
    book.name = name;
    book.author = author;
    res.status(200).json(book);
  };

  const deleteBook = (req, res) => {
    const { bookId } = req.query;
    const book = books.find((book) => book.id == bookId);
    if (!book)
      res.status(404).json({ message: `Book with id ${bookId} not found` });
    books.splice(books.indexOf(book), 1);
    res.status(200).json({ message: `Book with id ${bookId} deleted successfully` });
  };

