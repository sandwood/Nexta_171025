var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
  return response.render('index.html');
});

module.exports = router;