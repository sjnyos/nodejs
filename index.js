var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type": "text/plain"});
	res.end('Hello Node js');

}).listen(3000);
console.log('server have started in localhost 3000; press ctrl+c to exit');
