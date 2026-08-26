// http
const http = require("http")
// console.log(http)

const server = http.createServer((request,response)=> {
    // console.log(request);
    // console.log(response);
    response.write("heyyyy i have this data for you");
    response.end()
    response.writeHead()
    response.statusCode
    response.setHeader()
})

// server.listen(3000)  // -->> it is very wrong 