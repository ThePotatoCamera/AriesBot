exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media1.tenor.com/images/83d72781f0e6a99c4ea602ab5d411326/tenor.gif?itemid=8131967","https://media.giphy.com/media/AngzmmMj4h6zm/giphy.gif","https://media.giphy.com/media/1zJEz2pvqumDlG2Twh/giphy.gif","https://media.tenor.com/images/bfcb305949e67e91f49af2eff0561507/tenor.gif","https://media.giphy.com/media/v60KQg3MXLwTS/giphy.gif","https://media.giphy.com/media/VvvVOKJIogh44/giphy.gif","https://media.tenor.com/images/e05f82201d988352333c0ccad6edac2b/tenor.gif","https://media.giphy.com/media/ixmSsoIlI1lYc/giphy.gif","https://media.tenor.com/images/3fcf0832ed35440261fde89213ef2c37/tenor.gif","https://media.giphy.com/media/O6ECwJ9rnPLkQ/giphy.gif","https://media.giphy.com/media/3o6nVb8MBT7X80L8l2/giphy.gif","https://media.giphy.com/media/Gh8HYkhqlkQDe/giphy.gif","https://media.giphy.com/media/Q55JXZO5EXvqM/giphy.gif","https://media.tenor.com/images/d0af1e714dfb82b58847086e8d35314c/tenor.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está riendo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está riendo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está riendo gracias a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "reir"
  }