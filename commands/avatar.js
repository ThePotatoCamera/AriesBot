const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 

    let miembro = message.mentions.users.first()
    if (!message.mentions.users.size) {
        const embed = new Discord.MessageEmbed()
            .setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`)
            .setColor(0x66b3ff)
            .setFooter(`Foto de ${message.author.tag}`);
        return message.channel.send({ embed });
    
    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(`${miembro.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`)
            .setColor(0x66b3ff)
            .setFooter(`Foto de ${miembro.tag}`)
            .setTimestamp()
            
    
        return message.channel.send({ embed });
    }
  
}

module.exports.help = {
    name: "foto"
  }