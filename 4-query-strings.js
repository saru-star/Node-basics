const express=require('express');
const app=express()

const {data}=require('./public/MOCK_DATA')

// to handle query strings
// app.get('/api/v1/query',(req,res)=>{
//     const q=req.query;
//     console.log(q.id,q.first_name)
//     const singleData=data.find((d)=>(d.id===Number(q.id) && d.first_name===q.first_name))
//     if(!singleData){
//         res.send("not found");
//     }
//     res.json(singleData)
// })

// to search and limit number of res docs
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query;
    
    // to make he data modifiable
    let sortedData=[...data]

    if(search){
        sortedData=sortedData.filter((d)=>{
            return d.first_name.startsWith(search);
        })
    }
    if(limit){
        sortedData=sortedData.slice(0,Number(limit))
    }

    if(sortedData.length<1){
        return res.status(200).send("sorry no products matched ur search");
    }
    res.status(200).json(sortedData)
})


app.listen(5004);
