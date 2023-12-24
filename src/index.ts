#!/usr/bin/env node
//directly execute the file
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3005, () => {
    console.log("listening to port 3005")
})