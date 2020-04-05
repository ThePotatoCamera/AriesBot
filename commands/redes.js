const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed() 
    .setTitle("Me puede seguir en las siguientes redes:")
    .setColor(0x00AE86)
    .addField("Twitter:","https://twitter.com/AriesBot2")
    .addField("Pagina web:","https://ariesbotdiscord.000webhostapp.com/index.html")
    .addField("discordbots:","https://discordbots.org/bot/498796487715586049")
    .addField(`MyBotList`,"https://portalmybot.com/mybotlist/bot/498796487715586049")
    .setFooter("Mensaje enviado")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "redes"
  }