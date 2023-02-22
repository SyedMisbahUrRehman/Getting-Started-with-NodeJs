
//web framework for Node.js handling HTTP requests
const express = require('express');
// Bodyparser acting as a middleware, used to parse req body
const bodyParser = require('body-parser');
//create an instance of express 
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes go here

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/', (req, res) => {
  console.log(req.body); // log the data to the console
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



----------x----------x------------x-----------x-----------x-------------
