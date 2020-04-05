const Discord = require("discord.js");

	exports.run = (client, message, args, bot) => {
		const config = require('../botconfig.json');
		const ping = Math.round(client.ping);
	
		const embed = new Discord.RichEmbed()
            .setTitle(`Informacion de los mantenimientos:`)
            .addField("24/5/2019","Mantenimiento programado sin tiempo exacto de inactividad")
			.setTimestamp();
		message.channel.send({ embed });	
	};
module.exports.help = {
    name: "mantenimientos"
  }