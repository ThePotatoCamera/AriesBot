const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed() 
    .setTitle("Con este link te unes al servidor de soporte")
    .setColor(0x00AE86)
    .addField("Para unirte al servidor de soporte dale click al mensaje de arriba :smile:","Si tienes alguna duda o lo que sea entra")
    .setURL("https://discord.gg/BDVJ3Rb")
    .setFooter("Mensaje enviado")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "soporte"
  }