const mysql= require('mysql')


const connection= mysql.createConnection({host: "localhost",user:"root", password:"", database:"dbthuenha"})
connection.connect();

module.exports= connection