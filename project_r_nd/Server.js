const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config();


app.use(express.urlencoded())
app.use(express.json())

const cors = require("cors")
app.use(cors())

const path = require('path');
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));


const mongoose = require("mongoose")

const UserRouter = require("./Router/UserRouter")
app.use(UserRouter)

const ProductRouter = require("./Router/ProductRoutes")
app.use(ProductRouter)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  })


app.listen(4000, () => {
  console.log('Server running on 4000');
})









