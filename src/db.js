import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "crudnodejs.cbgimuaq443j.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Turquesa2003", // Coloca tu contraseña de MySQL
  database: "CrudNodejs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
