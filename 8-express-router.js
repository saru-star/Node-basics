const express=require('express');
const app=express();

const datarouter=require('./routes/data')
const authrouter=require('./routes/auth')

//static assets
app.use(express.static('./public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json());

app.use('/api/v1/data',datarouter)
app.use('/login',authrouter)
app.listen(5008);