const redis = require('redis'),
    net = require('net'),
    server = net.createServer(socket => {
        const subs = redis.createClient({ password: 921122 });
        subs.subscribe('main');
        subs.on('message', (chanel, megs) => {
            console.log('write', chanel);
            socket.write(`chanle ${chanel}: ${megs}`)
        });
        const pub = redis.createClient({ password: 921122 });
        socket.on('data', data => {
            console.log('publish', data);
            pub.publish('main', data);
        });
        pub.on('connect', () => {
            console.log(1);
            pub.set('word', 3, redis.print);
        })
        socket.on('end', () => {
            subs.unsubscribe();
            subs.end(true);
            pub.end(true);
        })
    })
server.listen(8080);
// db.on('connect', () => {
//     // db.set('word', 3, redis.print);
//     // db.get('word', (err, value) => {
//     //     if (err) return err;
//     //     console.log("got: ", value)
//     // });
//     // db.exists('word', (err, value) => {
//     //     if (err) return err;
//     //     console.log("exists: ", value)
//     // });
//     // db.hmset('hello', { x: '1', y: '2', z: '3' }, (err, value) => {
//     //     if (err) return err;
//     //     console.log(value);
//     // });
//     // db.hget('hello', 'z', (err, value) => {
//     //     if (err) return err;
//     //     console.log(value);
//     // });
//     // db.hkeys('hello', (err, value) => {
//     //     if (err) return err;
//     //     console.log(value);
//     // });
//     // db.lpush("tasks", '1', redis.print);
//     // db.lpush("tasks", '2', redis.print);
//     // db.lrange('tasks', 0, -1, (err, items) => {
//     //     if (err) return err;
//     //     console.log(redis.print.toString());
//     // });
//     db.sadd("task", '1', redis.print);
//     db.sadd("task", '2', redis.print);
//     db.smembers('task', (err, items) => {
//         if (err) return err;
//         console.log(items);
//     });
// });