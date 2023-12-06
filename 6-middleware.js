const express=require('express');
const app=express();
const logger=require('./logger')

app.use(logger);
app.get('/',(req,res)=>{
    
})

app.listen(5006)