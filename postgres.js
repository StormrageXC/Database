const pg = require('pg'),
    db = new pg.Client({ user: 'cbw', password: '921122', database: 'articles', });
db.((err, client) => {
    if (err) throw err;
    console.log('Connected to database', db.database);
});
// db.query(`
// CREATE TABLE IF NOT EXISTS snippets(
//     id SERIAL,
//     PRIMARY KEY(id),
//     body text
// );
// `, (err, result) => {
//     if (err) throw err;
//     console.log('create table "snippets"');
// });
const body = 'hello';
// db.query(`
// INSERT INTO snippets (body) VALUES (
//     '${body}'
// )
// RETURNING id
// `, (err, result) => {
//     if (err) throw err;
//     const id = result.rows[0].id;
//     console.log('inserted row with id %s', id);
//     db.end();
// });

db.query(`
UPDATE snippets SET body = '${body}' WHERE id=1
RETURNING id
`, (err, result) => {
    if (err) throw err;
    console.log('updated %s rows.', result.rowCount);
});