exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://i.ibb.co/6W0DVDX/tenor-9.gif","https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif","https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif","https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif","https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif","https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif","https://media.giphy.com/media/wnsgren9NtITS/giphy.gif","https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif","https://media.giphy.com/media/143v0Z4767T15e/giphy.gif","https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif","https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif","https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif","https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif","https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif","https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif","https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif","https://media.giphy.com/media/cotftb3AXgfV6/giphy.gif","https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif","https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif","https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif","https://cdn.weeb.sh/images/HyllFdmwZ.gif","https://media1.tenor.com/images/8fb9323e3270013e1f0d6c4d73e69a21/tenor.gif?itemid=7560705","https://media1.tenor.com/images/4ed35434562f54bff4abcf57d73729d6/tenor.gif?itemid=7291201","https://media.giphy.com/media/jwfIt9vwNJtvy/giphy.gif","https://media.tenor.com/images/bf25aaed21a1e01260d8edc3681254b2/tenor.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se abrazo a si mismo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} abrazo al aire.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor mencionaa a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito ${message.author} está abrazando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "abrazar"
  }
