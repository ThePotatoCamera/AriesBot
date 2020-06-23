exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media1.tenor.com/images/a795cd37f7dabd4c034b64a792fa2c39/tenor.gif?itemid=4936214","https://media1.tenor.com/images/0eb9cd488c5c042a5886036fd1b71e85/tenor.gif?itemid=9821861","https://media1.tenor.com/images/f4dfc0a791da9b61e1718830eddaf07d/tenor.gif?itemid=9821892","https://media1.tenor.com/images/77ba66b5f09d35033d676e0bdd0c7b9d/tenor.gif?itemid=11172794","https://media1.tenor.com/images/b910ea4ad9b796d5760056c6613bddb1/tenor.gif?itemid=12604807","https://media1.tenor.com/images/766a25de69e36c91d06726ba3113b234/tenor.gif?itemid=3446719","https://media1.tenor.com/images/af38fe7a3653184beebd82080d03d4a6/tenor.gif?itemid=9219481","https://media1.tenor.com/images/b5431680ccacefbc5548e6d81e04d7d5/tenor.gif?itemid=9214366",""];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta durmiendo solo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta durmiendo solo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito ${message.author} esta durmiendo junto a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "dormir"
  }