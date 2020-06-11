const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
const endpoint=process.env.API_URL;
const port=process.env.PORT || 9000;

const app=express()

mongoose.connect(endpoint,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',function(){
    console.log('Hurray....')
})

app.use(express.json())

const empRouter=require('./routers/REST')
app.use('/ToDo',empRouter)

app.listen(port,function(){
    console.log('Started')
})

