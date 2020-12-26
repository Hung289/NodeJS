const fs = require("fs");
const url = require("url");

function showHTML(path, res){
	fs.readFile(path, (err, data) => {
		if (err) {
			res.write("file not found");
		}else{
			res.write(data);
		}
		res.end();
	});
}

function render404(res){
	res.writeHeader(404);
	res.write("file not found");
	res.end();
}



module.exports = {
    onRequest: function onRequest(req, res){
        const path = url.parse(req.url).pathname;
        switch (path) {
            case "/":
                showHTML("./views/home.html", res);
                break;
            case "/about":
                showHTML("./views/about.html", res);
                break;
            default:
                render404(res);
                break;
        }
    }
};