const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed() 
    .setTitle("¡Estas a un paso de recibir ayuda a tus dudas!")
    .setColor(0x00AE86)
    .addField("Para unirte al servidor de soporte, dale click al mensaje de arriba :smile:","Si tienes alguna duda o problema, tan solo únete.")
    .setURL("https://discord.gg/VbM6S7P")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "soporte"
  }