const express=require('express');
const app=express();
const {data}=require('./public/MOCK_DATA')

//static assets
app.use(express.static('./public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json());

//using GET method
app.get('/api/v1/data',(req,res)=>{
    res.json(data);
})
app.get('/api/v1/data/:dataId',(req,res)=>{
    const {dataId}=req.params
    const singleData=data.find((d)=>
        d.id===Number(dataId)
    )
    if(!singleData){
        res.status(404).send("sorry not found");
    }

    res.json(singleData);
})

//using POST method
//from html page
app.post('/login',(req,res)=>{
    const {id,first_name}=req.body
    console.log(id,first_name)
    if(data.find((d)=>
        d.first_name===first_name
    )){
    res.status(200).send("welcome "+first_name)
    }
    else
    res.status(401).send("sorry not in db")
})

//using POSTMAN
app.post('/api/v1/data',(req,res)=>{
    const {id,first_name}=req.body
    console.log(id,first_name)
    if(data.find((d)=>
        d.first_name===first_name
    )){
    res.status(200).send("welcome "+first_name)
    }
    else
    res.status(401).send("sorry not in db")
})

//using PUT method
app.put('/api/v1/data/:dataId',(req,res)=>{
    const {dataId}=req.params
    
    const {first_name}=req.body

    const onedata=data.find((d)=>d.id===Number(dataId))
    if(!onedata){
        return res.status(404).json({success:false, msg:`no person with id ${dataId}`})
    }
    const newdata=data.map((d)=>{
        if(d.id===Number(dataId)){
            d.first_name=first_name;
        }
        return d
    })
    res.status(200).json(newdata)
})

//using DELETE method
app.delete('/api/v1/data/:dataId',(req,res)=>{
    const {dataId}=req.params
    const newdata=data.find((d)=>d.id===Number(dataId))

    if(!newdata){
        return res.status(400).json({success:false,msg:"id doesnot exist"})
    }
    const modifiedData=data.filter((d)=>d.id!==Number(dataId))
    res.json({success:true,data:modifiedData});
})

app.listen(5007);