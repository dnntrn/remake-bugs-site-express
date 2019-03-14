const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'hbs');

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
});



app.get("/", function(){
  app.render("index", {});

});


app.get("/about", function(){
  app.render("about", {});

});

app.listen(PORT);
