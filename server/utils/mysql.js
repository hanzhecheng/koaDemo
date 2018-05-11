const mysql = require("mysql");
const pool = mysql.createPool({
    host: '',
    user: '',
    password: "",
    database: ""
})

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                return reject(err);
            } else {
                conn.query(sql, values, (err, result, field) => {
                    if (err) {
                        return reject(err);
                    } else {
                        conn.release();
                        return resolve(result);
                    }
                })
            }
        })
    })
}
module.exports = query;