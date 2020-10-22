exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://media1.tenor.com/images/0ac9d18202e0abfb3c929f80bddab5a7/tenor.gif?itemid=11671696","https://media1.tenor.com/images/db142377aea2eb5c926b27c594a2a21f/tenor.gif?itemid=12712368","https://media1.tenor.com/images/94b717c4566a9046aeff72109238c97b/tenor.gif?itemid=5701461","https://media1.tenor.com/images/ed4a8b6d55016f66c059a948052c1058/tenor.gif?itemid=11892350","https://media1.tenor.com/images/0fc9904cc11770ae5e225a08276e78f7/tenor.gif?itemid=5171991","https://media.tenor.com/images/e58be011d382088d560e0c7bb783b365/tenor.gif","https://media1.tenor.com/images/a98821759487623481c99c5a7a8b85f5/tenor.gif?itemid=8748037","https://media.tenor.com/images/c6fcdea05fcf90b4f480282062605c10/tenor.gif","https://media.tenor.com/images/9082000f7f47f42b00ac86b596fcbce5/tenor.gif","https://media.tenor.com/images/b99b15d3d49603ac6b664e2534b8ff54/tenor.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está despertando.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está despertando.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("Por favor, menciona a alguien.");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} ha despertando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "despertar"
  }