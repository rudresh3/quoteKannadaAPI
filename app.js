const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv/config');
const bodyparser = require('body-parser');
const cors = require('cors');

// //Middlewares
// app.use('/post', ()=>{
//     console.log("hoooo")
// })


//Middlewares
app.use(cors());
app.use(bodyparser.json());



//Import Routes
const postsRoute = require('./routes/posts');

app.use('/api/v1/quotes', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to Database'))

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})