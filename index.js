var http = require('http');
http.createServer(function(req, res){
	// res.writeHead(200,{"Content-Type": "text/plain"});
	// res.end('Hello Node js');

	//routing 
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case '': 
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.end('Homepage');
				break;
		case '/about':
				res.writeHead(200,{'Content-Type': 'text/plain'});
				res.end('About us page');
				break;
		default:
				res.writeHead(404,{'Content-Type':'text/plain'});
				res.end('NOt Found');
				break;
	};

}).listen(3000);
console.log('server have started in localhost 3000; press ctrl+c to exit');
