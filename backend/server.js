require("dotenv").config();
const express = require('express');


const PORT = process.env.PORT
const MONGODB = process.env.MONGODB

const userRoutes = require('./routes/user')

// const requireAuth = require('./middleware/requireAuth')
// app.use(requireAuth)

const app = express();

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/user', userRoutes)

const mongoose = require('mongoose');



// app.get('/api/v1' , (req , res , next) => {
//     console.log("hello !");
//     res.json({msg:"hii"})

// })


// connect to db
mongoose.connect(MONGODB)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })