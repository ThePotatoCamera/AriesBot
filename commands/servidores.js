const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(`Dando servicio a ${bot.guilds.size} servidores.`);

}

module.exports.help = {
    name: "servidores"
  }