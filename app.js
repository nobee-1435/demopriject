const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Simulated "data on" status
app.get('/', function(req,res){
  res.render('home');
});
// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
