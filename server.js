import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

server.set('view engine', 'ejs');

server.get(['/',
'/login',
'/register',
'/accomodation',
'/event-participation',
'/tshirt',
'/tours',
'/previews',
'/report/registered',
'/report/summary',
'/report/tshirt',
'/report/participation',
'/report/totalcost',
'/report/paymentstatus',
'/report/balance',
'/test',
], (req, res) => {
    res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('*', (req, res) => {
    res.render('index');
})

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});