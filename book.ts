import express from 'express';

const router = express.Router();

router.get('/book', (req, res) => {
    
    res.send("[To-Do: all the books.]");
  });
  
  router.get('/book/:id', (req, res) => {

    const id= req.params.id;

    res.send(`[To-Do: Spicific book from a ${id} the list of books.]`);
  });
 
  router.post('/', (req, res) => {
    res.send("[To-Do: add book 1. title, puplication year, author]  ++ with validation to data.");
});
  
  router.put('/book/update/:id', (req, res) => {

    const id = req.params.id;

    res.send('[To-Do: update the data inside the sample.json file nad body request.]');
  });
  
  router.delete('/book/delete/:name?/:publicationYear?', (req, res) => {

    const { name, publicationYear} = req.params;

    res.send("[To-Do: delete the book with name OR OR OR publicaiton year.]");
  });
  
  router.get('/book/delete/:name?/:publicationYear?', (req, res) => {

    const { name, publicationYear} = req.params;

    res.send("[To-Do: Spicific book from a spicific name or publication year.]");
  });
  
  router.get('/book/:publicationyear', (req, res) => {

    const publicationYear = req.params;
    res.send("[To-Do: Spicific book from a spicific name or publication year.]");
  });

   router.get('/book/healthy', (req, res) => {
    try {
        res.send("You are Healthy");
    } catch (error) {
      res.sendStatus(404);
    }
  });

  export default router;