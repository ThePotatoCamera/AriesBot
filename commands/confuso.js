exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://media1.tenor.com/images/b190423e95656752e5742d14585b49fa/tenor.gif?itemid=11848501","https://media1.tenor.com/images/536a895d9087d3c1002d1560bde96319/tenor.gif?itemid=4762979","https://media1.tenor.com/images/3b22d6b2a54964ece29cb2ce03684dba/tenor.gif?itemid=10268351","https://media1.tenor.com/images/1db912e6857c86f335d4be139ee4f6ec/tenor.gif?itemid=7296537"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta confuso.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta confuso.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta confundiendo a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "confuso"
  }