const express = require('express');
const morgan = require('morgan');
// const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/students', (req, res) => {
    res.json([
        {
            id: 0,
            fName: 'Bob',
            lName: 'Coder',
            realm: 'SDCS'
        },
        {
            id: 1,
            fName: 'Regina',
            lName: 'React',
            realm: 'SDCS'
        },
        {
            id: 2,
            fName: 'Jerry',
            lName: 'Javascript',
            realm: 'SDCS'
        },
        {
            id: 3,
            fName: 'Tom',
            lName: 'Typescript',
            realm: 'SDCS'
        }
    ]);
});

module.exports = app;
