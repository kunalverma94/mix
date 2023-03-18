const port = 7070;
const http = require("http");
http.createServer((req, res) => {

    newFunction(req, res);
    // res.write(new Date().toISOString());
    // res.end();
}).listen(port, () => {
    console.log(`http://127.0.0.1:${port}/`);
})

function newFunction(req, ress) {
    console.log(req.url);
    http.get("http://localhost:5000/api/Teacher").on("response", res => {



        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log(parsedData);
                ress.write(rawData);
                ress.end();
            } catch (e) {
                ress.write(new Date().toISOString());
                ress.end();
            }
        });

    });
}
