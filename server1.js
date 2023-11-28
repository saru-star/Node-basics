const http=require('http')
const {readFileSync}=require('fs')

const landingpage=readFileSync('./public/index.html');
const styles= readFileSync('./public/index.css');
const server=http.createServer((req,res)=>{
    const url=req.url;

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        console.log(url, 'user is accessing landing page');
        res.end(landingpage);
    }
    else if(url==='/index.css'){
        res.writeHead(200,{'content-type':'text/css'})
        console.log('css is applied to landing page');
        res.end(styles);
    }
    else if(url==='/help'){
        res.writeHead(200,{'content-type':'text/html'})
        console.log('user is in help page');
        res.end('<h1>this is help page</h1>');
    }
    else{
        res.writeHead(400,{'content-type':'text/plain'})
        console.log('requesting resource not found');
        res.end('page not found')
    }
    
});

server.listen(5000);