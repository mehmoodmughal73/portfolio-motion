const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql-db",
  user: "root",
  password: "rootpassword",
  database: "portfolio_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

module.exports = db;
