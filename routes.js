import http, {  ServerResponse } from 'http';
import fs from 'fs';


class Router {

   route = {
      '/':this.indexRoute,
      '/style': this.styleRoute,
      '/script': this.scritpRoute
   };
   

   indexRoute(res = new ServerResponse()){
      fs.readFile('./src/index.html', (err, data)=>{
         if(err){
            res.writeHead(404, {'content-type':'text/plain'});
            return res. end('incorrect patch');
         }
         res.writeHead(200, {"content-type":'text/html'});
         return res.end(data);
      })
   };

   styleRoute(res = new ServerResponse()){
      fs.readFile('./src/style.css',(err, data)=>{
         if(err){
            res.writeHead(400,{'content-type': 'text/plain'});
            return res.end('error fetching file');
         }
         res.writeHead(200,{'content-type':'text/css'});
         return res.end(data);
      })
   };

   scritpRoute( res = new ServerResponse()){
      fs.readFile('./src/script.js',(err, data)=>{
         if(err){
            res.writeHead(400,{'content-type': 'text/plain'});
            return res.end('error fetching file');
         }
         res.writeHead(200,{'content-type':'text/javascript'});
         return res.end(data);
      })
   }
}

export default Router;