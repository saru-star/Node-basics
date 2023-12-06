const express=require('express')
const router=express.Router();

const {data}=require('../public/MOCK_DATA')
//from html page
router.post('/',(req,res)=>{
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
module.exports=router