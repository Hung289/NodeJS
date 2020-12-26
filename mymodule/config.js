function showNotifi(){
    console.log("hello NodeJs");
}
const hostname = '127.0.0.1';
const port = 3000;

// module.exports.show = showNotifi;
// module.exports.hostname = hostname;
// module.exports.port = port;

module.exports = {
    show : showNotifi,
    hostname : hostname,
    port : port
}