//http
const http = require("http");

// Server
const httpServer = http.createServer((req,res) => {
    // req is always incoming.
    // res is send the response to api call
    res.end("Hello World")
})

// host 
httpServer.listen(9005,'127.0.0.1', (err) => {
    if(!err){
        console.log("Server is running");
        console.log("Press CTRl + C to disconnect server ....")
    }
});
