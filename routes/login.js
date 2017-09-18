const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")


const requireAuth = function(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect("/login")
  }
}

router.get("/", requireAuth, function(req, res) {
  models.posts.findAll({
      include: [{model:
        models.likes,
        as: 'likes'
      }],
      limit: 20,
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then(function(posts) {
      models.user.findOne()
        .then(function(user) {
          res.render("index", {
            testmessage: "Succesfully rendered posts",
            posts: posts,
            user: req.session.user
          })
        })
    })
})


router.get("/login", function(req, res) {
  res.render("login")
})

router.post("/login", function(req, res) {
  const username = req.body.username
  const password = req.body.password
  let users = models.user

  users.find({
      where: {
        username: username
      }
    })

    .then(function(user) {
      if (!user) {
        res.render("login", {
          message: "Your credentials are wrong"
        })
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.user = user
          res.redirect("/")
        } else {
          res.render("login", {
            message: "Your credentials are wrong"
          })
        }
      }
    })
})

module.exports = router
