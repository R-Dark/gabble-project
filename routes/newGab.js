const express = require("express")
const router = express.Router()
const models = require("../models")

const requireAuth = function(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect("/login")
  }
}

router.post("/newGab", function(req, res) {
  const newGab = models.posts.build({
    title: req.body.title,
    body: req.body.body,
    userid: req.session.user.id
  })
  newGab.save()
    .then(function(post) {
      res.redirect("/")
    })
    .catch(function(error) {
      res.render("newGab", {
        errorMessage: "wrong info",
        error: error.errors
    })
  })
})


router.get("/newGab", requireAuth, function(req, res){
  res.render("newGab")
})

router.post

module.exports = router
