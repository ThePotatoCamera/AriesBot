const Discord = require("discord.js");

	exports.run = (client, message, args, bot) => {
		const config = require('../botconfig.json');
		const ping = Math.round(client.ping);
	
		const embed = new Discord.RichEmbed()
			.setTitle(`Información de: **__ ${client.user.username} __**`)
			.setThumbnail(client.user.avatarURL)
			.setColor(0xefb810)
			.addField('Ping:', ping, true)
			.addField('Versión:', config.longVersion, true)
			.setFooter('Desarrollado por PokeToribio™#7828.')
			.setTimestamp();
		message.channel.send({ embed });	
	};
module.exports.help = {
    name: "infobot"
  }