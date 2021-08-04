let restaurant = require('../model/restaurant');
let express = require('express');
const router = express.Router();
let db = require('../db/db');

router.get("/", function (req, res){
   db.query("SELECT * FROM Restaurants WHERE name LIKE '%'|| $1 ||'%';", [req.query.searchString],(err, result) => {
    if (err) {
      console.log(err.stack);
      res.status(409);
    } else {
      
        //result.rows.forEach(element => console.log(element));
        res.send( result.rows);
        res.status(200);
    }
  });


 });

 router.post("/",function (req, res){
     
    const {id, rating, name, site, email, phone, street, city , state, lat, lng} = req.body;
    //console.log(req);
    db.query('INSERT INTO Restaurants(id , rating,name ,site ,email ,phone ,street ,city ,state , lat ,  lng ) VALUES($1, $2,$3,$4, $5, $6 ,$7 ,$8 ,$9 ,$10 ,$11 ) ;',[id, rating, name, site, email, phone, street, city , state, lat, lng], (err, result) => {
        if (err) {
          console.log(err.stack)
          res.status(409);
        } else {
            res.send( result.rows[0]);
            res.status(201);
        }
      });

    
});


router.put("/",function (req, res){
     
    const {id, rating, name, site, email, phone, street, city , state, lat, lng} = req.body;
    //console.log(req);
    db.query(
        'UPDATE Restaurants SET rating = $2,name = $3, site = $4,email = $5,phone = $6,street = $7,city = $8, state = $9,lat= $10, lng = $11    WHERE id = $1;'
    ,[id, rating, name, site, email, phone, street, city , state, lat, lng], 
    (err, result) => {
        if (err) {
          console.log(err.stack)
          res.status(409);
        } else {
            res.send( result.rows[0]);
            res.status(201);
        }
      });

    
});

router.delete("/",function (req, res){
    //console.log(req);
    console.log(req.query.uuidString)
    db.query(
        'DELETE FROM Restaurants WHERE id = $1;'
    ,[req.query.uuidString], 
    (err, result) => {
        if (err) {
          console.log(err.stack)
          res.status(409);
        } else {
            res.send( result.rows[0]);
            res.status(201);
        }
      });

    
});



 module.exports = router;






