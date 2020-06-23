exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rainbow_trout_transparent.png/200px-Rainbow_trout_transparent.png';
		const mention = message.mentions.members.first();
		if (message.author == mention || mention.id == '323221933980123136') {
            return;
		}
		else if (args < 1) {
            return;
        }
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("Por favor, menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${mention} ha recibido un truchazo de n00b.`)
				.setImage(images);

			message.channel.send({ embed });
		}
	}
};
module.exports.help = {
    name: "trucha"
  }