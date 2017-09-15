const express = require("express")
const router = express.Router()
const models = require("../models")

router.post("/likeGab", function(req, res) {
  const newLike = models.likes.build({
    userid: req.session.user.id
    postid: req.session.post.id
  })
  newLike.save()
    .then(function(post) {
      res.redirect("/")
    })
    .catch(function(error) {
      res.render("newLike", {
        errorMessage: "wrong info",
        error: error.errors
    })
  })
})

module.exports = router
