const {Model, DataTypes} = require('sequelize')
const connection = require('../database/connection')

class Message extends Model{}

  Message.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      id:{
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey:true
      },
      message:{
        type: DataTypes.TEXT,
        allowNull:false
      }
    },
    {
      sequelize: connection,
      modelName: 'Message',
      timestamps: false
    }
  )

  module.exports = Message