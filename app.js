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
app.get("/test/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Message.findOne({ where: { id: id } }).then((msg) => {
      if (!msg) return res.status(404).end();
      res.render("test", { name: msg.name, message: msg.message });
    });
  } catch (error) {
    next(error);
  }
});
app.use(errorHandler)

app.listen(7000, () => console.log("Server running on port 7000"));
