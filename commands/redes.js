const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed() 
    .setTitle("Me puedes seguir en las siguientes redes:")
    .setColor(0x00AE86)
    .addField("Twitter:","https://twitter.com/AriesBot2")
    .addField("Página web:","https://ariesbotdiscord.000webhostapp.com/index.html")
    .addField("DiscordBots:","https://discordbots.org/bot/498796487715586049")
    .addField(`MyBotList`,"https://portalmybot.com/mybotlist/bot/498796487715586049")
    .setTimestamp()

message.channel.send({embed});  
} 
module.exports.help = {
    name: "redes"
  }