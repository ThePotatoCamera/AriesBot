const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Debes poner que quieres que diga como spoiler")
    let decir = args.slice(0).join(" ")
    message.channel.send("||" + decir + "||")
 
}

module.exports.help = {
    name: "spoiler"
  }