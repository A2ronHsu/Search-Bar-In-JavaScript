import http from 'http';
import Router from './routes.js';

const router = new Router();

const server = http.createServer((req,res)=>{
   const route = router.route[req.url];
   const validHttpMethod = req.method === 'GET';

   if(route && validHttpMethod){
      route(res);
   }else{
      res.writeHead(400,{"content-type":"text/plain"});
      res.end('notFound');
   }
}).listen(8080);