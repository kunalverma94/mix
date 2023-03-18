// // // Function.prototype.debounce = function debounce(timeout) {

// // //     const _this = this;
// // //     let t;
// // //     return function () {
// // //         clearTimeout(t)
// // //         t = setTimeout(_this.bind(this, ...arguments), timeout);
// // //     }
// // // }
// // // Function.prototype.throttle = function throttle(timeout) {

// // //     const _this = this;
// // //     let t =true;
// // //     return function () {

// // //         if (t) {
// // //             t = !t;
// // //             _this.apply(this, [...arguments])
// // //             setTimeout(() => t = !t, timeout);
// // //         }
// // //     }
// // // }

// // // function getData(x) {
// // //     console.log('loading...');

// // //     return new Promise((r, rr) => {
// // //         setTimeout(() => {
// // //             r([x, x, x, x])
// // //         }, 1000);
// // //     }).then(z => {
// // //         console.log('complete');
// // //         return z;
// // //     })
// // // }


// // // function search(keyword) {
// // //     getData(keyword).then(z => {
// // //         console.log(z);
// // //     })
// // // }


// // // var _search = search.throttle(1000)

// // // function performSearch(e) {

// // //     _search(e.target.value);
// // // }


// // function www() {
// //     console.log(Array.from(arguments));
// //     console.log([arguments]);
// // }
// // www(1,2,3)mck
// // // const p2 = new Promise((resolve, reject) => 
// // //                        setTimeout(reject, 1040, 'Bar'));
// // // const p3 = new Promise((resolve, reject) => 
// // //                        setTimeout(reject, 500, 'Que'));
// // // const p4 = new Promise((resolve, reject) => 
// // //                        setTimeout(reject, 40, 'Quaz'));
// // // // const p = [p1, p2, p3, p4];

// // // p1
// // //   .then(value => console.log(value))
// // //   .catch(err => console.log(err));

// function loadData(k) {
//     return new Promise((r, rr) => setTimeout(r, 1000, Array)).then(z => {
//         console.log(z);
//     })
// }


// Function.prototype.debounce = function (timeout) {
//     const _this = this;
//     let t;
//     return function () {
//         clearTimeout(t);
//         t = setTimeout(() => {
//             _this.apply(this, arguments)
//         }, timeout);
//     }
// }

// Function.prototype.throttle = function (timeout) {
//     const _this = this;
//     let t = true;
//     return function () {
//         if (t) {
//             t=false;     _this.apply(this, arguments)
//             t = setTimeout(() => {t=true;
//             }, timeout);
//         }

//     }
// }

// const _loadData = loadData.throttle(1000);

// function performSearch(event) {
//     let x = _loadData(event.target.value);
//     console.log(x);
// }

// function www(x, y) {
//     console.log(x, y);
// }


// www.apply(this, 1, 2)

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, ress) => {
    newFunction(req, ress)
    // ress.write(Date.now().toLocaleString());
    // ress.end();
    // fs.readFile("./dd.js", "utf8", (e, d) => {
    //     console.log(d);
    //     ress.write(d);
    //     ress.end();

    // })

});

server.listen(8080, () => {
    console.log('http://localhost:8080/');
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
            } catch (e) {
                console.error(e.message);
            }

            ress.write(rawData);
            ress.end();

        });

    });
}
