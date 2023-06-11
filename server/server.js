const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const depositRoutes = require('./routes/depositRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

connectDB();

const app = express();

// -----------CORS------------
const cors = require('cors');
const corsOptions ={
    // origin:["http://localhost:3000", "https://ultrexgold.onrender.com"],
    origin:["http://localhost:3000", "https://ultrexgold.herokuapp.com", "https://ultrexgold.herokuapp.com/dashboard", "http://localhost:5000/"],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// -----------End of CORS------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/deposits', depositRoutes);
app.use('/api/users', userRoutes);

// -----------------------
/*
 This part is for deployment (in this case using Heroku)
 */

//  Serve client/frontend 
if (process.env.NODE_ENV === 'production') {
    // static folder access (ie. the build folder)
    app.use(express.static(path.join(__dirname, '../client/build')))

    // for routing
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

/*
    After this, go to the command line and run 'npm run build'
    You have to create a heroku account and set it up
    The rest of the deployment process follows
*/
// ------------------------


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));