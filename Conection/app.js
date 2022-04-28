const express = require('express');
const mysql = require('mysql');

//Create connection to db
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'db'
});

//Connect
db.connect((err)=>{
    if (err) {
        throw err;
    } else {
        console.log("mysql connected");
    }
});

const app = express();

app.get('/getusers/:email',(req, res) => {
    // let sql = 'SELECT * FROM db.user;';
    // let sql = 'SELECT * FROM bd.usuario where email="{req}" and password = "password"; ';
    // let sql = `SELECT * FROM user WHERE email="${req}"`;
    
    let sql = `SELECT * FROM db.user WHERE email="${req.params.email}"`;

    console.log("======")
    console.log(sql);
    console.log("======")
    // console.log(req.params.email);
    
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
})

app.listen("3000", ()=> {
    console.log("server Started on port 3000");
});