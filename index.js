
var flash = require('express-flash')
let cookieParser = require("cookie-parser")
let express = require("express")
let expresssession = require("express-session")

let app = express();
app.use(cookieParser('keyboard cat'));
app.use(expresssession({ cookie: { maxAge: 9999999999 }, secret: "8bbfc54a5d6b345f89e048ee1430768decfa483f"}));
app.use(flash());

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
