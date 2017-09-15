const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const session = require("express-session")
const expressValidator = require("express-validator")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(expressValidator())

var sess = {
  secret: "robsite",
  cookie: {},
  saveUninitialized: true,
  resave: true
}
app.use(session(sess))



const homeRoutes = require("./routes/home")
app.use(homeRoutes)

const loginRoutes = require("./routes/login")
app.use(loginRoutes)

const newGabRoutes = require("./routes/newGab")
app.use(newGabRoutes)

const registerRoutes = require("./routes/register")
app.use(registerRoutes)



app.listen(3000, function(req, res) {
  console.log("Robots are listening");
})
