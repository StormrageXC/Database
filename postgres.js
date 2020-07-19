const pg = require('pg'),
    db = new pg.Client({ user: 'cbw', password: '921122', database: 'articles', });
db.connect((err, client) => {
    if (err) throw err;
    console.log('Connected to database', db.database);
    db.end();
})