const app = require('./app')
const dotenv = require('dotenv')
const connectDb = require('./config/db');

// config
dotenv.config({path:'backend/config/config.env'});



// DB
connectDb();
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is Working..`)
})

// unhandel Promise rejection
process.on('unhandledRejection',err=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to Unhadel Promise rejection`);

    server.close(()=>{
        process.exit(1)
    })
})