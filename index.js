const express = require('express');
const atpl = require('atpl'); // template engine
const morgan = require('morgan'); // logger
const app = express();
const port = 3000;

// hiển thị logger khi truy cập
app.use(morgan("combined"));

// sử dụng template engine
app.engine('html', atpl.__express);
app.set('devel', false);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

//import api vào
const api = (require("./app/api.js"));

app.all('*', (req, res) => {
  const path = req.params[0].slice(1);
  const tree = path.split("/");
  console.log(tree); 
  res.render(path, new api(req, res));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})