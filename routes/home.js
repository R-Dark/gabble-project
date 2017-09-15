const express = require("express")
const router = express.Router()
const models = require("../models")


router.get("/deleteGab/:id", function(req, res) {
  models.posts.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect("/")
    })
})


router.get("/logout", function(req, res) {
  req.session.user = null;
  res.redirect("login")
})


module.exports = router
