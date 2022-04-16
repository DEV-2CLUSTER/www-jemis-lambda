const mysql = require("mysql");

const host = "dftudbstrevdtgf.cps2q1ntjqzp.eu-west-3.rds.amazonaws.com";
const user = "admin";
const password = "jnP03N1NTgpr";
const database = "jemis";

const con = mysql.createConnection({
  ssl: { rejectUnauthorized: false },
  host,
  user,
  password,
  database,
});

con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  con.query("SELECT * FROM vals", (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:");
    console.log(rows);
  });
});
