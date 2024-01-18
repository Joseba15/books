const Book = require("../models/books");

const getBooks = async (req,res) =>{
    try{
        const books = await Book.find();
        res.status(201).json(books);
    }catch(err){
        res.status(500).json({msg: err})
    
    }
}

const getBook = async (req =request,res= response) =>{
    const id = req.params.id
    const book = await Book.findById(id);

    if (book) {
        
        res.status(201).json({book})
    }else{

        return res.status(400).json({
            msg: 'Libro no existe'
        });
    }
}

const postBook = async (req, res) => {

 
    const { title,author,pages,price,idCategory } =req.body;

    const newBook = new Book ({  title,author,pages,price,idCategory})
    const aux = await Book.findOne({title})

    if (aux==null) {
        await newBook.save();
    
        res.json({newBook});
        
    }else{
        return res.status(400).json({
            msg : `Libro ya existe`
        });
    }


    // res.status(500).json({msg: err})



}

const deleteBook = async (req, res) => {
     
    const id = req.params.id
    const aux = await Book.findById( id );

    if (aux!=null) {
        const bookDelete = await Book.findOneAndDelete({ "_id": id })
        res.json({bookDelete})
    }else{

        return res.status(400).json({
            msg: 'Libro no existe'
        });
    }

    
}
  
const updateBook = async (req ,res) => {
    const id = req.params.id;

    const { title,author,pages,price,idCategory } =req.body;
    const body = {  title,author,pages,price,idCategory};


    const book = await Book.findById(id);
    const aux = await Book.findOne({ "title": title });

    if(aux==null  || book==null){
        await book.updateOne(body)
        await Book.findByIdAndUpdate(id,body)
        
        res.json(book)
    }else if (aux==null){
        
        return res.status(400).json({
            msg: 'Libro no existe'
        });
    }else if (film==null){
        return res.status(400).json({msg : `Book  doesnt exits with id: ${id}`})
    }
  
}
module.exports = {getBooks,getBook,postBook,deleteBook,updateBook}


