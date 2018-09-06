const express = require("express");
const path = require("path");
const morgan = require("morgan")
const router = require("./routes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public")));

app.use(morgan("dev"));

app.get('/api', router);
