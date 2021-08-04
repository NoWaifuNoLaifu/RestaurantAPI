//app dependencies
let express = require('express');
let app = express();

//routes reference
let restaurantCRUD = require('./routes/restaurant');
let Statistics = require('./routes/statistics');

//cors policies
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
let port = process.env.PORT || 8010;

const prefix = '/restaurants';


app.use(prefix, restaurantCRUD);

// Assignment API Routes Statistic


// START THE SERVER
app.listen(port, "0.0.0.0");
console.log('Working on port ' + port);

module.exports = app;


