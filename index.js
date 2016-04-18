var express = require('express')
var app = express()
app.use(express.static('.'))
app.listen(1337)

app.get('/getFilm', function(req, res) {
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017/pokemonFilms', function(err, db) {
        if(!err) {
            db.collection('films').find().toArray(function(err, result) {
                if (!err) {
                    console.log('Connection to db')
                    res.send(result[Math.floor(Math.random() * result.length)].name)
                    db.close()
                }
            })
        }
    })
})
