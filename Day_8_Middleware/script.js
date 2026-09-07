const express = require('express');
const app = express();
app.use(express.json()) // parse json -> object -> req.body
// middleware function - it is a function that has access to the request object, 
// response object and the next middleware function in the application’s request-response cycle. 
// The next middleware function is commonly denoted by a variable named next.
// app level middleware
app.use(function(req,res,next){
console.log(`${req.method} - ${req.url}`)
next()
})

// route level middleware
const country = function(req,res,next){
  if(req.headers['country']){
    console.log("yess")
    next()
  }
  else{
    res.send('country not provided')
  }
  
}

const users = [{
  'name' : 'Mayank'
}]

app.get('/users',(req,res) => {
  const data = req.body
  console.log(data)
  // res.send('user data')
})

app.get('/posts',(req,res) => {
  res.send('post data')
})


app.listen(3001, () => {
  console.log("Server running at port 3001")
})