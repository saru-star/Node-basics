const express=require('express');
const app=express();
const path=require('path');

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./index.html'));
})

app.all('*',(req,res)=>{
    res.status(400).send('page not found');
})
app.listen(5001);

