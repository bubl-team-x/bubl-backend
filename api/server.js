const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const schoolsRouter = require('./schools/schools-router');
const studentsRouter = require('./students/students-router');
const hashtagsRouter = require('./hashtags/hashtags-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

server.use('/api', schoolsRouter);
server.use('/api', studentsRouter);
server.use('/api', hashtagsRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;