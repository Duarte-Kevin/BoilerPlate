const express = require("express");
const path = require("path");
const morgan = require("morgan")
const router = require("./routes/index")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public")));

app.use(morgan("dev"));

app.get('/api', router);

//404 middleware
router.use((req, res, next) => {
  res.status(404).send("Not found");
});

//sends index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error handler
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
