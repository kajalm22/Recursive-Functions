const express = require("express")
const mongoose = require("mongoose")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()


const port = process.env.PORT || 5000

const app = express()

connectDB()  

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use("/students" , require("./router/empRouter"))


app.listen(port , () => console.log(`Server connected on ${port}`))