const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed() 
    .setTitle("Me puedes seguir en las siguientes redes:")
    .setColor(0x00AE86)
    .addField("Twitter:","https://twitter.com/AriesBot2")
    .addField("Página web:","https://ariesbotdiscord.000webhostapp.com/index.html")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "redes"
  }