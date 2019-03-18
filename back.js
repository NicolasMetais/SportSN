const sqlite3 = require ('sqlite3').verbose();
const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbFile = 'sport.db';
const db = new sqlite3.Database(dbFile);
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.serialize( () => {

    db.run('CREATE TABLE IF NOT EXISTS sports (sport_name VARCHAR(50), sport_id INTEGER PRIMARY KEY AUTOINCREMENT)');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Basket');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Soccer');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Surf');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Athletics');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Swimming');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Volley-Ball');
    db.run('INSERT INTO sports (sport_name) VALUES (?)','Hand-ball');

    db.run('CREATE TABLE IF NOT EXISTS article (nom_article VARCHAR(50), autor VARCHAR(50),image VARCHAR(50), date TEXT, id_article INTEGER PRIMARY KEY AUTOINCREMENT, sport_id INTEGER, FOREIGN KEY (sport_id) REFERENCES sport(sport_id))');
    db.run ('INSERT INTO article (nom_article, autor, image, date, sport_id) VALUES (?,?,?,?,?)','Basket', 'Nicolas', '/basket.png', '2019-03-15 10:35:59', 1);

});

app.get('/', function (req, res) {
    db.all('SELECT * FROM article NATURAL JOIN sports', function (error, data) {
              res.send(data);
      });
});


/* app.post('/', function (request, response) {
	console.log(request);
	db.run('INSERT INTO article (nom_article, autor, date, sport_id) VALUES (?,?,?,?)', request.body.input1,  request.body.input2,request.body.input3, request.body.input4, function (error, data) {
  }); */


app.listen(4000, function () {
    console.log('STARTING...');
  }); 