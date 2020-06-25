const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado.")
    if(!args[0]) return message.channel.send("Debes poner que quieres que diga.")
    let decir = args.slice(0).join(" ")
    message.channel.send(decir)
 
}

module.exports.help = {
    name: "decir"
  }