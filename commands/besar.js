exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://media2.giphy.com/media/KH1CTZtw1iP3W/giphy.gif?cid=19f5b51a5be0873a41425237557b3c27","https://media1.giphy.com/media/jR22gdcPiOLaE/giphy.gif?cid=19f5b51a5be0881a7272657a59217a88","https://media2.giphy.com/media/JFnW2F8gvdACQ/giphy.gif?cid=19f5b51a5be08847596b334c32a63a02","https://media0.giphy.com/media/G3va31oEEnIkM/giphy.gif?cid=19f5b51a5be0873a41425237557b3c27","https://media1.giphy.com/media/ADH2n9nooVt2o/giphy.gif?cid=19f5b51a5be088f87762674e519cb7c8","https://media0.giphy.com/media/OSq9souL3j5zW/giphy.gif?cid=19f5b51a5be0896a62324e6c6f41bec8","https://media2.giphy.com/media/MXAPA2JH9GS4g/giphy.gif?cid=19f5b51a5be089b4586271487791d8a9","https://media0.giphy.com/media/wOtkVwroA6yzK/giphy.gif?cid=19f5b51a5be089c449574e78591e34d7","https://media2.giphy.com/media/nyGFcsP0kAobm/giphy.gif?cid=19f5b51a5be0874f5056613663cc8907","https://media1.giphy.com/media/iseq9MQgxo4aQ/giphy.gif?cid=19f5b51a5be08ac95a70614b493154bb","https://media3.giphy.com/media/pwZ2TLSTouCQw/giphy.gif?cid=19f5b51a5be08b9e5764667655229b75","https://media3.giphy.com/media/N3IuFaIanEs6I/giphy.gif?cid=19f5b51a5be08bd14e6e4b734d4475f0","https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif","https://media1.giphy.com/media/6VsSTR58oyIh2/giphy.gif?cid=19f5b51a5be08c4a645444314120f20a","https://media3.giphy.com/media/13uxqoROqopjy/giphy.gif?cid=19f5b51a5be08cc769442e3263041fcd"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se besó a si mismo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} besá a... nadie.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("Por favor, menciona a alguien.");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito ${message.author} besó a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "besar"
  }