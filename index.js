require('dotenv').config()
const express = require('express') //require is used to use javascript dependecies 
const app = express() // app is express variable been decalred here
const port = 3000      // port we're using in order to run this - while this is a virtual port 

app.get('/', (req, res) => {        //sending a request to '/'- home route through app 
  res.send('Hello Sanyaaaa!')          // response of the request
})

app.get('/instagram', (req,res) => {
    res.send('arora4')
})

app.get('/login', (req, res) => {
    res.send('<h1> My aabduenf </h1>')       // we can also send html, json, cookies over repsonse 
})

app.get('/youtube', (req, res) =>{
    res.send('<h2> dinfnegn </h2>')
})

app.listen(process.env.PORT, () => {        //listen function for listening to response and request
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// in order to avoid further forced changes of port for other computers during production