exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["","https://i.ibb.co/F8dzNRX/tenor-8.gif","https://i.ibb.co/9sQwZGK/Decimal-Naive-Galah-size-restricted.gif","https://media1.tenor.com/images/39ec9d3b1385467ed566f3a0b0a04e2d/tenor.gif?itemid=13451637","https://media1.tenor.com/images/33cfd292d4ef5e2dc533ff73a102c2e6/tenor.gif?itemid=12165913","https://media1.tenor.com/images/7b15664a2d1c5ac55fcbeddda54d04f8/tenor.gif?itemid=12005286","https://media1.tenor.com/images/571da4da1ad526afe744423f7581a452/tenor.gif?itemid=11658244","https://media1.tenor.com/images/187ff5bc3a5628b6906935232898c200/tenor.gif?itemid=9340097","https://media1.tenor.com/images/d08d0825019c321f21293c35df8ed6a9/tenor.gif?itemid=9032297","https://media1.tenor.com/images/72268391ffde3cd976a456ee2a033f46/tenor.gif?itemid=7589062","https://media1.tenor.com/images/8efff4185dfb404532d6132023775bcd/tenor.gif?itemid=6004308","https://media1.tenor.com/images/93c4833dbcfd5be9401afbda220066ee/tenor.gif?itemid=11223742","https://media1.tenor.com/images/368149044efd7407a4f37d69fbc35d60/tenor.gif?itemid=12193167"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta comiendo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta dando de comer al aire.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`Que bonito ${message.author} esta dando de comer a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "darcomer"
  }