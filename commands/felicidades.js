exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://i.ibb.co/CWBzPY1/Photo-Grid-1571238651116.jpg","https://i.ibb.co/xzgYCS4/Photo-Grid-1570997632564.jpg","https://i.ibb.co/Hhw8vMj/Photo-1570998080999.png","https://i.ibb.co/wsPLskF/Photo-1570997309336.png","https://media1.tenor.com/images/3fb1495cabc05336b4d4761cec66e571/tenor.gif?itemid=10001080","https://media1.tenor.com/images/e053653da26e7a48afa3388487fbb24f/tenor.gif?itemid=10286378s"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta felicitando.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta felicitando a todo el mundo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta felicitando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "felicidades"
  }