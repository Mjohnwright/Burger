var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// LOADS ALL the burgers in the DB
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// ADDS a burger to the DB
router.post("/api/burgers", function (req, res) {
  console.log("POST FIRED ON BACK END!")
  console.log('REQ: ' + req.body.burger_name);
  burger.insertOne(
    req.body.burger_name,
    function (result) {
      console.log('RESULT IN ADD BURGER: ' + result)
      // Send back the ID of the new quote
      //res.json({ id: result.insertId });
      res.redirect('/')
    });
});

//UPDATES 1 burger from list to devoured
router.put("/burger/update/:id", function (req, res) {
  // console.log('PUT BACKEND FIRED!')
  // console.log('REQ: ' + req.params.id); //HELP
  var condition = "id = " + req.params.id; //HELP
  console.log(req.body.devoured);
  console.log("39 condition", condition); //THIS IS PRINTING A STRING

  var eaten = " devoured = 1 ";
  burger.updateOne(
    "burgers", eaten, condition, function (data) {
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res){
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/');
  });
});

// router.delete("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });



// Export routes for server.js to use.
module.exports = router;