const express = require('express');
const data = 
    [
        {
            "id": 1,
            "createTimeStamp": "2022-10-26T12:14:46.529Z",
            "modifyTimeStamp": "2022-10-26T12:14:46.529Z",
            "name": "test 123"
        },
        {
            "id": 2,
            "createTimeStamp": "2022-10-26T12:14:50.876Z",
            "modifyTimeStamp": "2022-10-26T12:14:50.876Z",
            "name": "test 456"
        },
        {
            "id": 3,
            "createTimeStamp": "2022-10-26T12:14:55.667Z",
            "modifyTimeStamp": "2022-10-26T12:14:55.667Z",
            "name": "test 789"
        },
        {
            "id": 4,
            "createTimeStamp": "2022-10-26T12:15:02.320Z",
            "modifyTimeStamp": "2022-10-26T12:15:02.320Z",
            "name": "test 101112"
        }
    ];


function notFound(res,msg) {
    res.status(400).send(msg);
    res.end();
}

module.exports = (path) => {

    const app = express();

    app.post(`/${path}`, (req, res) => {
        const item = { id: data.length + 1, createTimeStamp: new Date(), modifyTimeStamp: new Date(), ...req.body };
        data.push(item)
        res.json(item);
        res.end();
    })

    app.get(`/${path}`, (req, res) => {
        res.json(data);
        res.end();
    })
    app.get(`/${path}/:id`, (req, res) => {
        const oldData = data.find(z => z.id == req.params.id);
        if (!oldData) {
            notFound(res,`item  with ID: "${req.params?.id}" does not exists`);
        }
        res.json(data.find(z => z.id == req.params.id));
        res.end();
    })

    app.put(`/${path}`, (req, res) => {
        const oldData = data.findIndex(z => z.id == req.body.id);
        if (oldData<0) {
            notFound(res,`item  with ID: "${req.body?.id}" does not exists`);
        }
        data[oldData]= { ...data[oldData], name: req.body.name };
        res.json(  data[oldData]);
        res.end();
    })

    app.delete(`/${path}/:id`, (req, res) => {

        const itemIndex = data.findIndex(z => z.id == req.params.id);
        if (itemIndex < 0) {
            notFound(res,`item  with ID: "${req.params?.id}" does not exists`);
        }
        data.splice(itemIndex, 1)
        data.push(item)
        res.json(item);
        res.end();
    })
    return app
};
