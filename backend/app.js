const express = require('express')
const cookiesParser = require('cookie-parser')
const bodyParser = require("body-parser");
const app = express()
const middleware = require('./middleware/error')
const cors = require('cors')


app.use(express.json())
app.use(cookiesParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Routes Imports
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');

app.use('/api/v1',product);
app.use('/api/v1',user);


// middleware
app.use(middleware)


module.exports = app;