const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed() 
    .setTitle("¡Ayuda a Aries!")
    .setColor(0x00AE86)
    .addField("Para votarme dale click al mensaje de arriba :smile:","**¡Solo puedes votar 1 vez cada 12 Horas!**")
    .setURL("https://discordbots.org/bot/498796487715586049/vote")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "votar"
  }