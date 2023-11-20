const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js");

const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set("strictQuery", false);
async function main() {
  await mongoose.connect(process.env.MONGO_CNN);
}
main().catch((err) => console.log(err));



app.use(express.json());

app.use('/user',userRoutes);
// app.use('/cars', carRoutes);


 

app.listen(process.env.PORT, function() {
  console.log(
    `El servidor se ha iniciado en el puerto ${process.env.PORT}`
  );
});