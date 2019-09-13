var http  = require('http'),
		fs = require('fs');

		function serveStaticFile(res,path,contentType, responseCode){
			if(!responseCode) responseCode=200;
			fs.readFile(__dirname+path,function(err,data){
				if(err){
					res.writeHead(500,{'Content-Type': 'text/plain'});
				}
				else{
					res.writeHead(responseCode,{'Content-Type': contentType});
					res.end(data);
				}
			});
		}

		http.createServer(function(req, res){
			var path =  req.url;
			switch(path){
				case '' : serveStaticFile(res,'/public/home.html','text/html'); break;

				case 'img' : serveStaticFile(res,'/public/logo.jpg'); break;

				default : serveStaticFile(res,'/public/404.html','text/html',404); break;
			}		
		}).listen(3000);
		console.log("server started at port 3000 , press ctrl+c to exit");