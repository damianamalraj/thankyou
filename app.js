const express = require("express");
const Controller = require("./controllers/controller");
const { errorHandler } = require("./errors/errorHandler");
const { Message } = require("./models/index");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", Controller.home);
app.get("/myMessage/:id", Controller.mymessage);

app.use(errorHandler)

app.listen(7000, () => console.log("Server running on port 7000"));
