const mysql = require("mysql");
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: "123456",
    database: "testdb",
    port: 3306
})
const mysqloperator = {
    query: function (sql, values) {
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
    },
    insert: function (sql, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection((connerr, connection) => {
                if (connerr) {
                    return reject(connerr);
                } else {
                    connection.beginTransaction(function (err) {
                        if (err) { throw err; }
                        connection.query(sql, params, function (error, results, fields) {
                            if (error) {
                                return connection.rollback(function () {
                                    reject(error);
                                });
                            }
                            connection.commit(function (err) {
                                if (err) {
                                    return connection.rollback(function () {
                                        reject(err);
                                    });
                                }
                                connection.release()
                                resolve(results);
                            });
                        });
                    });
                }
            })

        })
    }
}


module.exports = mysqloperator;