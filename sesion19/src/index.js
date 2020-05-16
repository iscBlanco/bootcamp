require ('dotenv').config()
import logger from '../src/logger'
import express from 'express'
import bodyParser from 'body-parser'
//const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/',function(req,res){
    logger.info(req)
    res.send('Hello world with express')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


