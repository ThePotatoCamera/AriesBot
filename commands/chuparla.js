exports.run = (client, message, args) => {
	const Discord = require('discord.js');
    if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237>`)
		const images = ["https://i.ibb.co/ch01BvP/cum17.gif","https://i.ibb.co/Gn8TTVN/Random-hentai-gif-NB-0295.gif","https://i.ibb.co/fS8H8Sh/Random-hentai-gif-NB0406.gif","https://i.ibb.co/bd6sb2m/Random-hentai-gif-NB0130.gif","https://i.ibb.co/k9md3P7/Random-hentai-gif-NB0103.gif","https://i.ibb.co/0nX4z0C/Random-hentai-gif-NB-1473.gif","https://i.ibb.co/kDbfM8b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			message.channel.send("Porfavor menciona a alguien")
		}
		else if (args < 1) {
			message.channel.send("Porfavor menciona a alguien")
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} le esta comiedo todo a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}
module.exports.help = {
    name: "chuparla"
  }