// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to objectconsole.log(jsonObject.name); // Output: John
// console.log(jsonObject.name);


// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert); // Convert object
// // JSON string
// console.log(jsonStringified); // Output: {"name": "Alice", "age":25}

//nxn

const express = require('express')
const app = express()
const db=require('./db')
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body




app.get('/', function (req, res) {
  res.send('welcome to my hotel how can i help u')
})
// app.get('/chicken',(req,res)=>{
//   res.send('sure sir, i would love to serve chicken')
// })
// app.get('/idli',(req,res)=>{
//   // res.send('welcome to south idnia,we love to serve idli')
//   var customized_idli={
//       name:'idxli',
//       size: '10cm',
//       is_sambhar: true,
//   }
//   res.send(customized_idli);

// })
// app.get('/chicken',(req,res)=>{
//   res.send('sure sir, i would love to serve chicken')
// })
// app.post('/items',(req,res)=>{
//   console.log('data is saved');
// })


//---------------------------------------------------------------------


//import the router files
const personRoutes =require('./routes/personRoutes')

//use the routers
app.use('/person',personRoutes);


const menuItem = require('./routes/menuRoutes');
app.use('/menuItem',menuItem);





const PORT=process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log('lisgening on port 3000');
})

