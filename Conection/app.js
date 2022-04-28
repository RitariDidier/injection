const express = require('express');
const cors = require('cors')

const mysql = require('mysql');

//Create connection to db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db'
});

//Connect
db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("mysql connected");
    }
});

const app = express();
app.use(cors());

app.get('/getusers/:email/:password', (req, res) => {
    // let sql = 'SELECT * FROM db.user;';
    // let sql = 'SELECT * FROM bd.usuario where email="{req}" and password = "password"; ';
    // let sql = `SELECT * FROM user WHERE email="${req}"`;
    let sql = `SELECT * FROM db.user WHERE email="${req.params.email}" AND password="${req.params.password}"`;

    console.log("======")
    console.log(sql);
    // console.log(req.params.email);
    console.log("======")

    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json(results);
    });
})

app.listen("3000", () => {
    console.log("server Started on port 3000");
});