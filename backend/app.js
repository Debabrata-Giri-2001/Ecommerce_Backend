const express = require('express')
const cookiesParser = require('cookie-parser')
const app = express()
const middleware = require('./middleware/error')


app.use(express.json())
app.use(cookiesParser())

// Routes Imports
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');

app.use('/api/v1',product);
app.use('/api/v1',user);


// middleware
app.use(middleware)


module.exports = app;