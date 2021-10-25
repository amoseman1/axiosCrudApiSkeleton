let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let database = require('./database/db');
const port = process.env.PORT || 4000;


const userRoute = require('../server/routes/userRoutes')


mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', userRoute)


// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.listen(port, () => {
    console.log(`🌎 ==> API server now on port ${port}!`);
});

// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});