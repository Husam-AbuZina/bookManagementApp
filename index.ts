import express from 'express';
import data from './data/Sample_data.js'; // import wasn't ".js", it tooke me 2 hours to realize :D
import Library from './types/library.js';
import bookRouter from './routers/book.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Running!');
});

app.use('/books', bookRouter)

// [To-Do: ]  // ---> Done <---
bookRouter.get('/', (req, res) => {
  const titles = data.map(book => book.title); // Only Titles
  let myBook = JSON.stringify(data); // All Data

  res.send(titles);
});



// [To-Do: ]  // ---> Done <---
app.get('/books/:id', (req, res) => {

  const bookId = parseInt(req.params.id);
  const book = data.find((book) => book.id === bookId)

  res.send(book);
});

// [To-Do: add book 1. title, puplication year, author with validation to data]  // ---> Done <---
app.post('/books/post', (req: Library.Request, res: Library.Response) => { 

  const { title, author, publicationYear } = req.body;

  if (!req.body.title || !req.body.author || !req.body.publicationYear) {
    res.status(400).send("Bro, this is invalid input!")
    return;
  }

  const newBook: Library.Book = {
    id: data.length + 1,
    title: req.body.title,
    author: req.body.author,
    publicationYear: req.body.publicationYear,
  }

  data.unshift(newBook);
  res.status(201).send("Book Created!");
});


// [To-Do: update the data inside the sample.json file nad body request.] // ---> Done <---
app.put('/books/update/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  if (!updatedBook.title || !updatedBook.author || !updatedBook.publicationYear) {
   res.status(400).send('Invalid input! Please provide title, author, and publicationYear.');
  }

  const bookToUpdate= data.findIndex((book) => book.id ===  parseInt(bookId));

  if (bookToUpdate === -1) {
   res.status(404).send("Error!");
  }

  data[bookToUpdate].title = updatedBook.title;
  data[bookToUpdate].author = updatedBook.author;
  data[bookToUpdate].publicationYear = updatedBook.publicationYear;

  res.json(data[bookToUpdate]);
});

// [To-Do: ]  // ---> Done <---
app.delete('/books/delete/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  console.log('Deleting book with ID:', bookId);

  const bookIndex = data.findIndex((book) => book.id === bookId);

  console.log('Book index:', bookIndex);

  if (bookIndex === -1) {
    console.log('Book not found!');
    return res.status(404).send('There is no such book!');
  }

  data.splice(bookIndex, 1);

  console.log('Book deleted successfully!');

  res.status(200).send('Book deleted successfully!');
});


//[To-Do] Returns all the books // ---> Done <---
app.get('/books/title', (req, res) => {
  const bookTitle = req.query.title as string;

  if (!bookTitle) {
    return res.status(400).send("Book title not provided in query parameters.");
  }

  // Find the book by its title (case-insensitive comparison)
  const book = data.find((book) => book.title.toLowerCase() === bookTitle.toLowerCase());

  if (!book) {
    return res.status(404).send("Book not found!");
  }

  res.send(book);
});

  //[To-Do: Spicific book from a spicific name or publication year.] // ---> Done <---
app.get('/books/pup/:publicationYear', (req, res) => {

  const bookPup = parseInt(req.params.publicationYear);
  const book = data.find((book) => book.publicationYear === bookPup)

  res.send(book);
});

app.use((req, res) => {
  res.status(404).send("You requested something I don't have :(");
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on http://localhost:${PORT}`);
});
