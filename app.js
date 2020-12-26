const http = require("http");


const configs = require("./mymodule/config");
const helper = require("./mymodule/helper");


http.createServer(helper.onRequest).listen(configs.port);
