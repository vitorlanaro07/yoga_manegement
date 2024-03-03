const express = require('express');
const dotenv = require('dotenv').config();

const {PORT, HOST, HOST_URL} = process.env;


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
}


