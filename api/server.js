const express = require('express')
const helmet = require('helmet')

const server = expres()

server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome'})
})


module.exports = server;