import * as mysql from 'promise-mysql';

async function connection() {
    const connection = await mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'docker',
        database: 'test_db',
        // multipleStatements: true
    });

    return connection;
}

connection().then(connection => {
    // console.log(connection);
    const result = connection.query('SELECT * FROM user');
    connection.end();

    return result;
}).then((rows) => {
    console.log(rows);
});
