const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/",(req, res) => {
    res.render("new-listings");
})
  router.post("favourites", (req, res) => {
    console.log("favourited")
  })
return router;
}
