const express = require('express');
const morgan = require('morgan');
//const axios = require('axios');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/students', (req, res) => {
    res.json([
        {
            id: 6541259651,
            fName: 'Bob',
            lName: 'Coder',
            realm: 'SDCS'
        },
        {
            id: 984569564,
            fName: 'Regina',
            lName: 'React',
            realm: 'SDCS'
        },
        {
            id: 31234561423,
            fName: 'Jerry',
            lName: 'Javascript',
            realm: 'SDCS'
        },
        {
            id: 564324896496,
            fName: 'Alex',
            lName: 'Ajax',
            realm: 'SDCS'
        },
        {
            id: 6836548984,
            fName: 'Virginia',
            lName: 'Vue',
            realm: 'SDCS'
        },
        {
            id: 456578946,
            fName: 'Henry',
            lName: 'HTML',
            realm: 'SDCS'
        },
        {
            id: 15654687654,
            fName: 'Cindy',
            lName: 'CSS',
            realm: 'SDCS'
        },
        {
            id: 32485633456546,
            fName: 'Tom',
            lName: 'Typescript',
            realm: 'SDCS'
        }
    ]);
});


app.post('/postResults', (req, res) => {
    console.log('req.body', req.body);
    res.send(req.body);
});

module.exports = app;
