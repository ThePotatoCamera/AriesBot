exports.run = (client, message, args) => {
	const Discord = require('discord.js');
    if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237>`)
    const images = ["https://i.ibb.co/pzxHk8B/boobs-220.gif","https://i.ibb.co/RSJMpMT/boobs-136.gif","https://i.ibb.co/fDJTf7G/boobs-400.gif","https://i.ibb.co/RhtNwRH/Pwank-085.gif","https://i.ibb.co/0FZGjzM/Pwank-086.gif","https://i.ibb.co/z5KHmz3/Pwank-137.gif","https://i.ibb.co/5xJ7kDw/Pwank-148.gif","https://i.ibb.co/b5m7sqn/Pwank-233.gif","https://i.ibb.co/pdQXqcZ/Pwank-247.gif","https://i.ibb.co/BjQhK4S/Pwank-265.gif","https://i.ibb.co/19yypwm/Pwank-270.gif","https://i.ibb.co/qYDZjSt/Random-hentai-gif-NB0730.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			message.channel.send("Porfavor menciona a alguien")
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta masturbando.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta masturbando pensando en ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}
module.exports.help = {
    name: "masturbarse"
  }