exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
       const images = ["https://i.ibb.co/XFY7SfS/Photo-Grid-1574690107168.jpg","https://i.ibb.co/PNSYqCw/20191125-145022.jpg","https://i.ibb.co/X3H6TJc/Photo-Grid-1574689581960.jpg","https://media1.tenor.com/images/9fd0700c04e81d083048d7100803e815/tenor.gif?itemid=5550230","https://media1.tenor.com/images/3348f40d0b580479f06a9b08dff247ac/tenor.gif?itemid=12414850","https://media1.tenor.com/images/d381f1de7b525c2bbd21e803cbd253f4/tenor.gif?itemid=12908346","https://media.giphy.com/media/11jPPp3IdY1wEU/source.gif","https://media.giphy.com/media/JuwD9qN2EbNJK/source.gif","https://media1.tenor.com/images/88819a7e457c5dc3f124b9d6bb720edc/tenor.gif?itemid=5586968","https://media1.tenor.com/images/029dd7e9219a62da792fa653514b4f4c/tenor.gif?itemid=5897515"]
	   const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} admite que es tonto`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} es tonto.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta llamando tonto a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "tonto"
  }