const express = require('express')
const cookiesParser = require('cookie-parser')
const bodyParser = require("body-parser");
const app = express()
const middleware = require('./middleware/error')
const cors = require('cors')
const routerPath = './routes/index.js';

app.use(express.json())
app.use(cookiesParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


const autoRenderRouters = () => {
    const routes = require(routerPath);
    for (const route in routes) {
        if (Object.hasOwnProperty.call(routes, route)) {
            app.use('/api/v1', routes[route]);
        }
    }
}

autoRenderRouters();
// middleware
app.use(middleware)

module.exports = app;