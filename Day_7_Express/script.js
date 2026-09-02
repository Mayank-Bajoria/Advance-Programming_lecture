const express = require("express");

// console.log(express);

const app = express();
// console.log(app);
// get takes 2 arguements first is path then a callback function.
app.get('/users',(req,res)=>{
res.send("Helooooo.... user")
})

app.listen(3001)