const express = require('express');

const app = express();

const cron = require('node-cron');
const fs =require('fs');

cron.schedule('*/10 * * * * *', ()=>{
    let data = 'Hi cron is running\n'
    fs.appendFile('logs.txt',data,(err)=>{
        if(err) throw err;
        console.log('file added');
    });
});

app.listen(3000, () =>{
console.log("hello baby girl");
})