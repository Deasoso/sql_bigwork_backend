const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : '123999',
  database : 'book'
})

const pool  = mysql.createPool({
  host     : '127.0.0.1',   // 数据库地址
  port     : '3306',
  user     : 'root',    // 数据库用户
  password : '123999',   // 数据库密码
  database : 'book',  // 选中数据库
  charset: 'UTF8_GENERAL50_CI'
})

// 连接数据库 这一步不是必须的 因为在query的时候会默认连接
connection.connect((err) => {
    // 如果在这一步抛出错误 请检查数据库配置  比如权限 选中数据库是否存在等等..
    if (err) return console.log('数据库连接失败', err.message);
    console.log('数据库连接成功');
})

let query = function( sql, values ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}