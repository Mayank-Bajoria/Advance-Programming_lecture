const http = require('http')
const{users,posts} = require("./data.js")
// console.log(users)
// console.log('hellooo')

const server = http.createServer((req,res) => {
console.log(req.url)
console.log(req.method)
res.writeHead(200, {
  'Content-type': 'text/plain'
})
if (req.url === '/users'){
  res.end(JSON.stringify(users));
}
})

server.listen(3001, () => {
  console.log("Server is listening at port 3001")
})