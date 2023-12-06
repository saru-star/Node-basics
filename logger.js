const log=(req,res,next)=>{
    const meth=req.method;
    var time=new Date()
    const date=time.getFullYear;
    console.log(" "+date," ",meth)
    res.send('test')
}
module.exports=log;