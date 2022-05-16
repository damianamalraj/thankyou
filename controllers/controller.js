const { Message } = require('../models/index');

module.exports = {
  home: async (req, res, next) => {
    try {
      res.render("thankyou",{ allNames: await getAllNames()});
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  mymessage: async (req, res, next) => {
    try {
      const id = req.params.id;
      await Message.findOne({ where: { id: id } }).then((msg) => {
        if (!msg) return res.status(404).end();
        res.render("mymessage", { name: msg.name, message: msg.message });
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

async function getAllNames(){
    return await Message.findAll({
        attributes: ["name", "id"],
        raw: true,
    }).then((names)=>
        names.map((name)=>({
            name:name.name,
            id:name.id
        }))
    )
}