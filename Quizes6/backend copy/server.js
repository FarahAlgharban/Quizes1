const express = require('express')
const app = express()
app.use(express.json());

/* 1- create a backend from scratch using the Express framework 
    and run it on PORT 5000 */



    /* 4- the product router will have the following requests,paths and functions: 
        a) a POST request to the path (/add) that will run the function addProduct 
           that adds the product to the database  

        (assume the data is saved on mongoDB with an already made schema Products )
*/


/* 5- The account router will have the following requests, paths, functions:
        a) a GET request to the path (/) that call the function getInfo that 
           returns the information of the account (use params to find the account)
        
        (assume the data is saved on mongoDB with an already made schema Products )
*/


app.post('/add', function addProduct (req, res)=> {
    try {
        const product = { name: req.body.name, password: Password };
        res.status(201).send();
      } catch {
        res.status(500).send();
      }
    }
   
})

app.get('/', function getInfo(req, res) => {
    console.log(req.body);
   
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});