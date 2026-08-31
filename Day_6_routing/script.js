const http = require('http')
const{users,posts} = require("./data.js")
// console.log(users)
// console.log('hellooo')

const server = http.createServer((req,res) => {
console.log(req.url)
const path = req.url;
const arr = path.split("/");
const id = Number((arr[2]))

console.log(req.method)

res.writeHead(200, {
  'Content-type': 'application/json'
})
if (req.url === '/users'){
  res.end(JSON.stringify(users));
}
else if (req.url === `/users/${id}`){
  console.log('entered')
  
  res.end(JSON.stringify(users.find((obj) =>  obj.id == id)))
}
})






server.listen(3001, () => {
  console.log("Server is listening at port 3001")
})