var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1q2w3e4r!',
    database: 'new_schema'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

        if (error) throw error;
        console.log(results);
        console.log('The solution is: ', results[0].solution);
});

connection.end();