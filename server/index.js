const express = require('express');
const cors = require('cors');
const postgres = require('postgres');
const pool = require("./db");


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post("/roles" , async(req,res)=>{
    try{
        console.log(req.body);
        const {description} = req.body;
        const newRole = await pool.query("INSERT INTO roles (role_name) VALUES($1)",[description]
        );
        res.json(newRole);
    }catch(err){console.log(err.message);}
});

app.listen(8080,()=>{
    console.log("server has started on port 8080");
})