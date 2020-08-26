const level = require('level'),
    db = level('./app.db', {
        valueEncoding: 'utf8'
    }),
    key = 'user',
    value = 'ffs';
db.put(key, value, err => {
    if (err) throw err;
    db.get(key, (err, result) => {
        if (err) throw err;
        console.log(result);
        db.del(key, (err) => {
            if (err) throw err;
            console.log('deleted', key)
        })
    })
})