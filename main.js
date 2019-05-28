// const http= require('http'); // imports http module
//const port= 3000; //port number
// const requestHandler = (response, request) => {
// console.log(request.url)
// response.end('welcome to my app guys')
// }

// const server= http.createServer(requestHandler) // creates server
// server.listen(port, (err) => {      //server listen
// if(err) {       //checks error
//   return console.log('An error occured' err)
// }
//http.createServer((request, response) => {
  //response.write('welcome to this server!')
  //response.end()
//}).listen(port)
//console.log(`server running at ${port}`)  //example of  a template string represented as ``

//const fs= require('fs')  //imports file

// const data= fs.readFileSync('message.txt') //reads file
//console.log(data.toString()) //converts file to string

const fs= require('fs')
const data= fs.readFile('message.txt', (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log(result.toString())
})