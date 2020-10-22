const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos.");
    let bdecir = args.slice(0).join(" ")
    if(!bdecir) return message.channel.send("Que quieres que diga?")
    message.channel.bulkDelete(1).then(msg => msg.delete(2))
    message.channel.send(bdecir)
 
}

module.exports.help = {
    name: "bdecir"
  }