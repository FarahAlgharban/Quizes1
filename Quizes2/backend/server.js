// 3. Take at least five objects fetched from the above API call, and save them in a local file named db.js. Create your local API with the following handles:

// Get all the data from db.js
// Get specific object from db.js (by name or id or a unique attribute that identifies it)
// Get the data object at random

const express = require('express');
const cors = require('cors');

const app = express();
const { data } = require("../db");


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);

    app.get("/", (req, res) => {
        res.send(data);
      });
  
});