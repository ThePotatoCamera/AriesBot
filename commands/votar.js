const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed() 
    .setTitle("Con este link me votas")
    .setColor(0x00AE86)
    .addField("Para votarme dale click al mensaje de arriba :smile:","Solo puedes votar 1 vez cada 12 Horas!")
    .setURL("https://discordbots.org/bot/498796487715586049/vote")
    .setFooter("Mensaje enviado")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "votar"
  }