
var flash = require('express-flash')
let cookieParser = require("cookie-parser")
let express = require("express")
let expresssession = require("express-session")

let app = express();
app.set 
app.use(cookieParser('8bbfc54a5d6b345f89e048ee1430768decfa483f'));
app.use(expresssession({ cookie: { maxAge: 9999999999 }, secret: "8bbfc54a5d6b345f89e048ee1430768decfa483f", resave: true,
	saveUninitialized: true}));
app.use(flash());
app.set("view engine", "ejs")
app.all('/express-flash',function(req,res){
  req.flash('success', 'This is a flash message using the express-flash module.');
  res.redirect(301, '/');
})

app.get('/', req, res ) {
  res.render('index', {expressFlash: req.flash('success') });
}

app.listen(3000, () => {
  console.log('server started');
});
