var oracledb = require('oracledb');
var config = {
  user: "",
  password: "",
  connectString: ``
}

function query(sql, params) {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(config,
      function (err, connection) {
        if (err) {
          return reject(err.message);
        }
        connection.execute(sql, (err, result) => {
          if (err) {
            return reject(err.message);
          }
          resolve(dealData(result));
          connection.close(
            function (err) {
              if (err) {
                return reject(err.message);
              }
            });
        })
      });
  })
}
function dealData(result) {
  let headArr = result.metaData;
  let contentArr = result.rows
  return contentArr.map(m => {
    return headArr.reduce((origin, key, index) => {
      origin[key.name] = m[index]
      return origin
    }, {})
  })
}
module.exports = query;