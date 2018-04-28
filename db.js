var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://aesonode:aeso1234@naboo.mongodb.umbler.com:40513/aeso", 
    function(err, conn){
        if(err) return console.log(err);
        global.db = conn;
    });

function save(nome, idade, callback){
    global.db.collection("customers").insert({nome, idade}, function(err, result){
        if(err) return console.log(err);
        callback();
    });
}

function savarUsuario(email, password, callback){
    global.db.collection("usuarios").insert({email, password}, function(err, result){
        if(err) return console.log(err);
        callback();
    });
}

function listarUsuario(callback) {
    global.db.collection("usuarios").find().toArray(function(err, docs){
        if(err) return console.log(err);
        callback(docs);
    });
}

module.exports = {
    save,
    savarUsuario,
    listarUsuario
}