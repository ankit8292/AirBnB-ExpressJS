//import {dbConfig} from "./index";
// import dotenv from "dotenv";

const dotenv = require('dotenv');

dotenv.config();

const config ={
  development : {
    // username: dbConfig.DB_USER,
    // password: dbConfig.DB_PASSWORD,
    // database: dbConfig.DB_NAME,
    // host:   dbConfig.DB_HOST,
    // dialect: 'mysql' // connected to mysql database

    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:   process.env.DB_HOST,
    dialect: 'mysql'
  }
  
}
module.exports=config;