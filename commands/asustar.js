exports.run = (client, message, args) => {
	const Discord = require('discord.js');

		const images = ["https://media1.tenor.com/images/f3fd855b33cc9a4c2cdace99c8313287/tenor.gif?itemid=13906991","https://media1.tenor.com/images/b43c425daabd745f501af186c8e0a5ed/tenor.gif?itemid=10801610","https://media1.tenor.com/images/1506a5f0274a81e2d966a65e6b66d40b/tenor.gif?itemid=10028599","https://media1.tenor.com/images/8c267e6395e74221cadb4f2c18f07d65/tenor.gif?itemid=4780182","https://media.giphy.com/media/kdRqNVdQAkqTooB2Ly/giphy.gif","http://giphygifs.s3.amazonaws.com/media/9MxYQnbTfiyIg/giphy.gif","https://media.giphy.com/media/Wmhy4DGpU7brHsCY38/giphy.gif","https://media.giphy.com/media/LOKQ06qppbrB6ZMivo/giphy.gif","https://media.giphy.com/media/3jeMMSx0uXZaaiE1qy/giphy.gif"];
        const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta asustando a si mimo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} asusto a... nadie.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta asustando a ${mention} espero que ya no tenga hipo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

module.exports.help = {
    name: "asustar"
  }