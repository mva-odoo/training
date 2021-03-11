const http = require('http');

let Server = {
    port: 8090,

    start: function () {
        var self = this
        const requestListener = function (req, res) {
            req.url;
            if (req.url === '/first'){
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin' : '*',
                });
                res.end(JSON.stringify([
                    {"name": "PS", "id": "55"},
                    {"name": "RD", "id": "40"}
                ]));
            }
            else if (req.url === '/second'){
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin' : '*',
                });
                res.end(JSON.stringify([
                    {"name": "mva", "xp": "10", "lang": "fr",  },
                    {"name": "al", "xp": "11", "lang": "fr" }
                ]));
            }
            else{
                res.writeHead(200);
                res.end('Hello, World! on port ' + self.port + ' URL--> ' +req.url);
            }

        }
        const server = http.createServer(requestListener);
        server.listen(this.port)
    }
}

var start = Server.start
start.bind(Server)();