const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const schoolsRouter = require('./schools/schools-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

server.use('/api', schoolsRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;