import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';


class Routes {
   constructor(){

   }
   route = {
      '/':this.indexRoute,
      '/style': this.styleRoute,
      '/script': this.scritpRoute
      
   };
   

   indexRoute(req = new IncomingMessage(), res = new ServerResponse()){
      fs.readFile('./src/index.html', (err, data)=>{
         if(err){
            res.writeHead(400, {'content-type':'text/plain'});
            return res. end('incorrect patch');
         }
         res.writeHead(200, {"content-type":'text/html'});
         return res.end(data);
      })
   };

   styleRoute(req = new IncomingMessage(), res = new ServerResponse()){
      fs.readFile('./src/style.css',(err, data)=>{
         if(err){
            res.writeHead(400,{'content-type': 'text/plain'});
            return res.end('error fetching file');
         }
         res.writeHead(200,{'content-type':'text/css'});
         return res.end(data);
      })
   };

   scritpRoute( req = new IncomingMessage(), res = new ServerResponse()){
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

export default Routes;