const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.channel.send(`Dando servicio a ${client.guilds.size} servidores con un total de ${client.users.size} usuarios.`);

}

module.exports.help = {
    name: "servidores"
  }