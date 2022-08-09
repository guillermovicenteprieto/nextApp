import { books } from "../../../src/data.js";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      getBooks(req, res);
      break;
    case "POST":
      createBook(req, res);
      break;
  }
};

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const createBook = (req, res) => {
  const { id, name, author } = req.body;
  const book = { id, name, author };
  books.push(book);
  res.status(201).json(book);
};
