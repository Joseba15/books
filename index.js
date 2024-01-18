const express = require("express");
const cors = require("cors");
const app = express();


const userRoutes = require("./routes/user.js");
const bookRoutes = require("./routes/books.js");
const categoryRoutes = require("./routes/category.js");


const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set("strictQuery", false);
async function main() {
  await mongoose.connect(process.env.MONGO_CNN);
}
main().catch((err) => console.log(err));



app.use(express.json());
app.use(cors());

app.use('/user',userRoutes);
app.use('/books', bookRoutes);
app.use('/category',categoryRoutes);

 

app.listen(process.env.PORT, function() {
  console.log(
    `El servidor se ha iniciado en el puerto ${process.env.PORT}`
  );
});
