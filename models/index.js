const database = require("../database/connection");

const Message = require('./message')

async function setup(){
    await database.sync({force: true})
}

async function seed(){
    await Message.bulkCreate([
          {name:"chocolate", message:"Thank you"},
          {name:"banana", message:"Thank you"},
          {name:"vanilla", message:"Thank you"}
        ])
}

async function start(){
    await setup()
    await seed()
}

start()

module.exports = {Message}
