const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');


const run=async()=>{
    console.log("this is runing")
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test', Promise: bluebird});
    // global.connection=connection
}
// create the connection, specify bluebird as Promise
run()

