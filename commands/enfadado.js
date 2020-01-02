exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media.tenor.com/images/5fc00f4b77c9e3bc802390ef4c32410e/tenor.gif","https://media1.tenor.com/images/626c46111e061ba9adc8afac1e68b8bc/tenor.gif?itemid=10291331","https://media1.tenor.com/images/9da88707debb16d8eb2ea2a34cdc9cfb/tenor.gif?itemid=4878522","https://media1.tenor.com/images/ad7d26c09c7ad7a0a13ac15a09deaec6/tenor.gif?itemid=12060689","https://media1.tenor.com/images/d71677c00b83c059ecec50c4b6d870a5/tenor.gif?itemid=5469389","https://media1.tenor.com/images/0c3db8b7d0f87531e82688f06e359763/tenor.gif?itemid=10046967","https://media1.tenor.com/images/cef9ca8a8fbaa7a319ddf3bfab541069/tenor.gif?itemid=4712804"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta enfadado con el mismo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta enfadado.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta enfadado por culpa de ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "enfadado"
  }