const Discord = require("discord.js");

	exports.run = (client, message, args, bot) => {
		const ping = Math.round(client.ping);
	
		const embed = new Discord.MessageEmbed()
            .setTitle(`Información de los mantenimientos:`)
            .addField("24/5/2019","Mantenimiento programado sin tiempo exacto de inactividad.")
			.setTimestamp();
		message.channel.send({ embed });	
	};
module.exports.help = {
    name: "mantenimientos"
  }