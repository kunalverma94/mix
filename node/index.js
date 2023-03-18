


function sum(a) {
        return function (b)
        {
            if (b) {
                return sum(a+b);
            }else{
                return a;
            }
        }
}

var f=sum(1)(2)(6)(4)();
console.log(f);
// function parse(x,parent) {
//     //   const keys =Object.keys(x);

//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//             const element = object[key];
            
//         }
//     }
// }
// parse(x)
// console.log(y);

// const express =require('express');
// const app=express();
// const abc =require('./routes/abc')

// app.use(express.json());
// app.use(abc('abc'));

// app.listen(2000,()=>{
//     console.log('start');
// })
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// global.NODE_TLS_REJECT_UNAUTHORIZED = 0
// console.log(11111);
// const https = require('https');
// const url = "https://demo.perquisite.net/RewardCentre/Api/Login/GetRSAMFASystemInfo";
// var req = https.get({
//     headers: {
//         'Host':  "demo.perquisite.net",
//         'Cookie': "Dbf9cizqJbSrUyZ/GSYnqFu7fxnrA929j5zwlKboIjMWRZfWRCBtH/576tAfdkL5yjENGdjlFoCaYAlLJIx3Ofyk4QimA/kQ3CK0DxIuLREJEXV+PoCLTZmjszGtaWmAteXqhH1osc23PFtqH5lcdMqcdhzQ6tP6/YdsKG92A0SkM1r0qKbQlPihH7FAQbURLgaJ87+xeaYNbkaFhSoMjrqoLqv3vuepAEfkhQOBvOrYGVa9YMDS/+aJP1DcXazxvKjsXtEWo/O23YOkp+fW6ALYLRrefV66NszhwMKqDqtwtfyVX17K1LtwzkKGZGzr42t4iJfYh9NjDt/V6wQToB3gx2jT1/OkxbVfVehwA12+EZCZIYHKpBpMl/G/FmYi5vbpSMFMGr1M9e+R2pjukBLlMbpI6xHsJ3ogvQXxn8AeKN2Rwp1Q4aOCRARrSPgto+2OQoC6ZJKpxDwOM17prkj4YH2Dm2M7TQcx1fFzbH2wuwNqvKv56fH7eklV25e4+LFDuFlkMmd8S2M35AT6NiF7jA0rCpaKjdRjG7cRquICwqhZPkNpfvLLX7twldF0d7wBisy+m3png77xKijdHwoIUxAN496U9gTsG8JKen707CgW9JIIAmzHPbJSVIex6faLwlXASi1NXIET+W8qhoqijdw=",
//         'Content-Type': 'application/json'
//     },
//     host: "demo.perquisite.net",
//     path: "/RewardCentre/Api/Login/GetRSAMFASystemInfo"
// }, (res) => {
//    console.log(res.statusCode);
   
// });

// const request = require('request');
// request("https://demo.perquisite.net/RewardCentre/Api/Login/GetRSAMFASystemInfo", function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });