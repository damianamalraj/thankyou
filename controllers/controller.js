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
      let message = await Message.findOne({ where: { id:id } }) 
      if (message) {
        res.render("mymessage", {
          name: message.name,
          message: message.message,
        });
      }
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