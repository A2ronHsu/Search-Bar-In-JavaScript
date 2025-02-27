import http from 'http';
import Routes from './routes.js';

const routes = new Routes();

const server = http.createServer((req,res)=>{
   const validRoute = routes.route[req.url];
   if(validRoute){
      routes.route[req.url](req,res);
   }else{
      res.writeHead(400,{"content-type":"text/plain"});
      res.end('notFound');
   }
}).listen(8080);