exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media1.tenor.com/images/7760594a26698d3c315700ce7c510164/tenor.gif?itemid=12464902","https://media1.tenor.com/images/4b7e8eac14a8ff67c0580a9a6c41cb72/tenor.gif?itemid=11651070","https://media1.tenor.com/images/7f4d56cef853d7a1135bdc9dc53f46d3/tenor.gif","https://media1.tenor.com/images/2ce3d4f60631e63d6b815674e82a2c1d/tenor.gif?itemid=5073041","https://media1.tenor.com/images/75bc7694746aecd679ed2c2c95854cf5/tenor.gif?itemid=5073037","https://media1.tenor.com/images/9383eda929c0ecee201b56e1bd99808c/tenor.gif?itemid=5595239","https://media1.tenor.com/images/f8539f656d2ed90be7cd3bbe95d263d2/tenor.gif?itemid=6015959","https://media1.tenor.com/images/508fe7a0908b87ea1de36391094a1049/tenor.gif?itemid=9214816","https://media1.tenor.com/images/f940a9a80ba5cb89ab1022d4a66e6a4a/tenor.gif?itemid=12209113","https://media1.tenor.com/images/74ef9bb8cb2c63c0b79e5827f284f826/tenor.gif?itemid=7263992","https://media1.tenor.com/images/283ce845ab23558fc4cd66797c21a921/tenor.gif?itemid=4531180","https://media1.tenor.com/images/1a7bf79a86baf4622d7aadfc0bbf5689/tenor.gif?itemid=7263965","https://media.tenor.com/images/bbed89ec5bfe9d1a730241c754f69960/tenor.gif","https://media1.tenor.com/images/d5c0f40dc41dc385825cd4c3a5a8fc7e/tenor.gif?itemid=5010750","https://media1.tenor.com/images/89590d26993eda37930a782464db7a0e/tenor.gif?itemid=5409740","https://media1.tenor.com/images/2a517207505a5a3694e947b94eabe29b/tenor.gif?itemid=10447140"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está feliz.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está feliz.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito, ${message.author} está feliz gracias a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "feliz"
  }