 const express =require('express')
const app = express()

app.get('/', (request, response)=>{
response.send('welcome to indian express')
})

app.listen(5000,'0.0.0.0',()=>{
console.log('server started on port 4000')
})
