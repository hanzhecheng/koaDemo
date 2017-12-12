const mysql = require("mysql");
const pool = mysql.createPool({
    host: '192.168.6.223',
    user: 'SYSTEM',
    password: "alayadata",
    database: "ADPUB"
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
module.exports=query;