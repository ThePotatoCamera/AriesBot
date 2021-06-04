const Discord = require("discord.js");

	exports.run = (client, message, args) => {
		const ping = client.ws.ping;
		const version = require("../package.json")
	
		const embed = new Discord.MessageEmbed()
			.setTitle(`Información de: **__${client.user.username}__**`)
			.setThumbnail(client.user.avatarURL)
			.setColor(0xefb810)
			.addField('🏓 Ping:', ping, true)
			.addField('🔧 Versión:', version.version, true)
			.addField('Verificación:', verificado(client.user.verified), true)
			.setFooter('Desarrollado por el equipo de AriesBot.')
			.setTimestamp();
		message.channel.send({ embed });	
	};

	function verificado(verificationBoolean) {
		if (verificationBoolean == true) {
			return '<:Verificado:681246902636904450> ¡Bot verificado!'
		}
		else {
			return 'Bot no verificado.'
		}
	}

module.exports.help = {
    name: "infobot"
  }