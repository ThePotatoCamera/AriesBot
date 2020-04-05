exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://media1.tenor.com/images/4872c4d7c384edb98fe4abb1114d87ab/tenor.gif?itemid=12332087","https://media1.tenor.com/images/925ee4e5936a8693d08a10d0efea0a8b/tenor.gif?itemid=13183706","https://media1.tenor.com/images/4fc5f024b235695fbfc1af79bd22947c/tenor.gif?itemid=9821831","https://media1.tenor.com/images/b9c63fbce2fc47ab47967c13c4a6a1e9/tenor.gif?itemid=10018402","https://media1.tenor.com/images/0dda61bccc1b0ecf87ff01ef2ac31505/tenor.gif?itemid=5996844","https://media1.tenor.com/images/c86d521cf8e4f1ad3e2b57f67fc7adf7/tenor.gif?itemid=8643505","https://media1.tenor.com/images/5d9858928c5c1cbd8e49dc875412e214/tenor.gif?itemid=7708941","https://media1.tenor.com/images/94d403f793fdb32d1234cfb5ed339eae/tenor.gif?itemid=11083192","https://media1.tenor.com/images/c7e6b78a4d8ea4e5f437feb7d6a6d439/tenor.gif?itemid=10464577","https://media1.tenor.com/images/0343dcabeebd8c8b6d6dbf2df5757d17/tenor.gif?itemid=5239426","https://media1.tenor.com/images/14817d1719addda2921987e271ab8008/tenor.gif?itemid=5972700","https://media1.tenor.com/images/45b3808e9aa97196869a199027a16e4e/tenor.gif?itemid=11341465"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está corriendo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está corriendo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito, ${message.author} está corriendo para ver a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "correr"
  }