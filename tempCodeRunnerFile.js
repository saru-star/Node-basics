app.get('/api/v1/data/:dataid',(req,res)=>{
    const {dataid}=req.params;
    var singleData=data.find((d)=>d.id==Number(dataid))
    console.log(singleData);
    res.json(singleData)
})