exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media1.tenor.com/images/9377aa4eda2e4ff3789ff40000afcc8e/tenor.gif?itemid=4628770","https://media1.tenor.com/images/c688509f6d2c8a36bbeebac530de9248/tenor.gif?itemid=10472740","https://media1.tenor.com/images/718b7038f6ee3de30ae4bb393768bbad/tenor.gif?itemid=4710155","https://media1.tenor.com/images/6268879a4f68289308d9331d2e74d6a0/tenor.gif?itemid=12057483","https://media1.tenor.com/images/3197c1b509cca920c848e5264cc96bbb/tenor.gif?itemid=11838110","https://media1.tenor.com/images/1bfa8ecd4172a7605197d775ea33707c/tenor.gif?itemid=12181650","https://media1.tenor.com/images/7a3e05268055e1cdddc3695112eed49d/tenor.gif?itemid=12390455","https://media1.tenor.com/images/d1788397edc8f25ccbea3324493230fe/tenor.gif?itemid=13510467"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está nervioso por su culpa.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está nervioso.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("Por favor, menciona a alguien.");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está nervioso por culpa de ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "nervioso"
  }