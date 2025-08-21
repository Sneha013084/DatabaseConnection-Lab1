
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

// load environment variables

const port = process.env.PORT || 3001;
const uri = process.env.MONGO_URI; 

// console.log("Mongo URI:", uri);  


//create mongoDB client

const client = new MongoClient(uri);


app.get('/', async(req ,res) =>{

    try {
        // connect to database

        await client.connect();
        await client.db("admin").command({ ping: 1});

        res.json ({ message : "Sucessfully connected to the database!"});
    } catch (error){
        console.error ("Database connection failed", err);
        res.status(500).json({ message: "Failed to connect to the database"});
    }finally {
         await client.close();
    }
});

app.listen (port ,() => {
    console.log (` Server running at http://localhost:${port}`);
}) ;