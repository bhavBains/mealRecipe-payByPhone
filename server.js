const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // Create application/json parser

// start server on local machine
app.listen(8000, () => {
  console.log("Your app is running at PORT 8000");
});

// Get request to index page
app.get('/', (req,res) => {
  // Call to JSON file can be made here,
  // and send data back to front end
  res.render('index');
});