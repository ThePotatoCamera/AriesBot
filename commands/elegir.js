const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args) return message.channel.send("¿Qué desea preguntarme?")
    if(args.length > 10) return message.channel.send('Lo siento, solo puedo elegir entre 10 opciones.')
    let question = args
    let replies = args
    let result = Math.floor((Math.random() * replies.length))

    let ballembed = new Discord.MessageEmbed()
    .setColor("#efb810")
    .addField("Opciones:", question)
    .addField("Elección:", replies[result])
    .setTimestamp()
    message.channel.send(ballembed)

    }

    module.exports.help = {
        name: "elegir"
      }