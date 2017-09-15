const express = require("express")
const router = express.Router()
const models = require("../models")

//delete a gab
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

// //get likes to display
// router.get("/likeGab/:id", function(req, res){
//   models.likes.findAll()
//   .then(function(likes){
//     res.render("/", {
//       likes: likes
//     })
//   })
// })

//like a gab
router.get("/likeGab/:id", function(req, res) {
  const newLike = models.likes.build({
    userid: req.session.user.id,
    postid: req.params.id
  })
  newLike.save()
    .then(function(like) {
      res.redirect("/")
    })
    .catch(function(error) {
      res.render("/", {
        errorMessage: "wrong info",
        error: error.errors
    })
  })
})


module.exports = router
