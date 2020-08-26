const db = require('./db'),
    localforage = require('localforage');
// db().then(() => {
//         db.Article.create({
//             title: 'my article',
//             content: 'article content'
//         }).then(() => {
//             db.Article.all().then(articles => {
//                 console.log(articles);
//                 process.exit();
//             })
//         })
//     })
//     .catch(err => { throw err });
console.log(localforage.getItem);