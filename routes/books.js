const express = require('express');
const router = express.Router();
const {check}= require('express-validator')
const { validateFields } = require("../middlewares/validate-fields.js");
const {getBooks,postBook,deleteBook,getBook,updateBook} = require('../controllers/books.js');

router.get('/:id',[
  check('id','Tiene que ser un id valido').isMongoId(),
  validateFields],
  getBook);

router.get('/', getBooks);


router.post('/',[
  check ('title','title is required').not().isEmpty(),
  check ('author','author is required').not().isEmpty(),
  check ('pages','pages is required').not().isEmpty(),  
  check ('price','price is required').not().isEmpty(),
  check('title', 'title must be more than 6 characters').isLength({ min: 6}),
  // check('price', 'price must be a number ').not().isNumeric(),
  validateFields
],postBook);

router.delete('/:id',[
  check('id','Tiene que ser un id valido').isMongoId()
],deleteBook);


router.put('/:id', [
  check('id','Tiene que ser un id valido').isMongoId(),
  check ('title','title is required').not().isEmpty(),
  check ('author','author is required').not().isEmpty(),
  check ('pages','pages is required').not().isEmpty(),  
  check ('price','price is required').not().isEmpty(),
  check('title', 'title must be more than 6 characters').isLength({ min: 6}),
  check('price', 'price must be a number ').not().isNumeric(),
  validateFields
],updateBook );

module.exports= router;