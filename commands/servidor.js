const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("Debes ejecutar este comando en un servidor.")
    var server = message.guild; 
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID:', server.id, true)
    .addField('Región:', server.region, true)
    .addField('Creado el:', server.createdAt.toDateString(), true)
    .addField('Dueño:', server.owner.user.username,)
    .addField('Miembros:', server.memberCount, true)
    .addField('Roles:', server.roles.size, true)
    .setTimestamp()
    .setColor(0x66b3ff)
    
message.channel.send({ embed });

}

module.exports.help = {
    name: "servidor"
  }