#!/usr/bin/env node
var MongoClient = require('mongodb').MongoClient
MongoClient.connect("mongodb://localhost:27017/pokemonFilms", function(err, db) {
    if(!err) {
        console.log('Connection made successfully')
        db.collection('films').drop(function() {
            db.createCollection("films", function() {
                db.collection('films').insert({ _id: 1, name: "Pokémon the First Movie: Mewtwo Strikes Back" })
                db.collection('films').insert({ _id: 2, name: "Pokémon the Movie 2000: The Power of One" })
                db.collection('films').insert({ _id: 3, name: "Pokémon 3: The Movie - Spell of the Unown: Entei" })
                db.collection('films').insert({ _id: 4, name: "Pokémon 4Ever - Celebi: Voice of the Forest" })
                db.collection('films').insert({ _id: 5, name: "Pokémon Heroes: Latios & Latias" })
                db.collection('films').insert({ _id: 6, name: "Pokémon: Jirachi: Wish Maker" })
                db.collection('films').insert({ _id: 7, name: "Pokémon: Destiny Deoxys" })
                db.collection('films').insert({ _id: 8, name: "Pokémon: Lucario and the Mystery of Mew" })
                db.collection('films').insert({ _id: 9, name: "Pokémon Ranger and the Temple of the Sea" })
                db.collection('films').insert({ _id: 10, name: "Pokémon: The Rise of Darkrai"})
                db.collection('films').insert({ _id: 11, name: "Pokémon: Giratina and the Sky Warrior" })
                db.collection('films').insert({ _id: 12, name: "Pokémon: Arceus and the Jewel of Life" })
                db.collection('films').insert({ _id: 13, name: "Pokémon: Zoroark: Master of Illusions" })
                db.collection('films').insert({ _id: 14, name: "Pokémon the Movie: Black—Victini and Reshiram" })
                db.collection('films').insert({ _id: 15, name: "Pokémon the Movie: Kyurem vs. The Sword of Justice" })
                db.collection('films').insert({ _id: 16, name: "Pokémon the Movie: Genesect and The Legend Awakened" })
                db.collection('films').insert({ _id: 17, name: "Pokémon the Movie: Diancie and the Cocoon of Destruction" })
                db.collection('films').insert({ _id: 18, name: "Pokémon the Movie: Hoopa and the Clash of Ages" })
                db.collection('films').insert({ _id: 19, name: "Pokémon the Movie: M19: Name TBC" })
                //db.close()
            })
        })
    }
})
