require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require('body-parser')



const mongoose = require('mongoose');
const password = process.env.DB_PASS
// const bdString = 'mongodb+srv://Romannet77:'+password+'@cluster0-fo6v4.mongodb.net/test?retryWrites=true&w=majority'
const bdString = 'mongodb://localhost:27017/carblog'
mongoose
    .connect( bdString,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));


const PostModel = require('./api/models/post.model.js')

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.use(express.static('public'))
app.use(express.static('uploads'))
app.set('view engine','pug');

const postRouter = require('./api/routes/post.router.js')
const managerRouter = require('./api/routes/manager.router.js')
const mainRouter = require('./site/routes/main.router.js')
postRouter(app)
managerRouter(app)
mainRouter(app)

app.listen(process.env.PORT, function() {
  console.log("application listen on port "+ process.env.PORT);
})
