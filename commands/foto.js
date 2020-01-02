const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 

    let miembro = message.mentions.users.first()
    if (!miembro) {
        const embed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Foto de ${message.author.tag}`);
        message.channel.send({ embed });
    
    } else {
        const embed = new Discord.RichEmbed()
            .setImage(`${miembro.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Foto de ${miembro.tag}`)
            .setTimestamp()
            
    
        message.channel.send({ embed });
    }
  
}

module.exports.help = {
    name: "foto"
  }