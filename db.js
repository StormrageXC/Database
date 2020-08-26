const knex = require('knex'),
    db = knex({
        client: 'pg',
        connection: {
            user: 'cbw',
            password: '921122',
            database: 'articles'
        },
        useNullAsDefault: true
    });
module.exports = () => {
    return db.schema.createTableIfNotExists('articles', table => {
        table.increments('id').primary();
        table.string('title');
        table.text('content');
    });
}
module.exports.Article = {
    all() {
        return db('articles').orderBy('title');
    },
    find(id) {
        return db('articles').where({ id }).first();
    },
    create(data) {
        return db('articles').insert(data);
    },
    delete(id) {
        return db('articles').del().where({ id });
    }
}