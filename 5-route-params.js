const express=require('express');
const app=express();

const {data}=require('./public/MOCK_DATA');

app.get('/',(req,res)=>{
    res.send("<a href='/api/data/'>get data</a>")
})
// app.get('/api/data/',(req,res)=>{
//     //when we need only the name id and email we do mapping
//     const modifiedData=data.map((d)=>{
//         const {id,first_name,email}=d;
//         return {id,first_name,email};
// })
// res.json(modifiedData);
// })

app.get('/api/data/:dataId',(req,res)=>{
    const {dataId}=req.params
    const singleData=data.find((d)=>
        d.id===Number(dataId)
    )
    if(!singleData){
        res.status(404).send("sorry not found");
    }

    res.json(singleData);
})





app.listen(5002);