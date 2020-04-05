exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media1.tenor.com/images/61514efcdee962f8bdd2524106297b5d/tenor.gif?itemid=12907022","https://media1.tenor.com/images/9af170209b74fc3bfdd02e862469739f/tenor.gif?itemid=12276419","https://media1.tenor.com/images/be0f81cb8bdc8a86d02907716eee9211/tenor.gif?itemid=11955959","https://media1.tenor.com/images/1db724758006d44da3849b2eda55dc15/tenor.gif?itemid=5115916","https://media1.tenor.com/images/089be742e1fd6d8cd1ec88053f6c8b09/tenor.gif?itemid=9332964","https://media1.tenor.com/images/732949ea5580d7e9a08a6fdf4dce2efe/tenor.gif?itemid=5051072","https://media1.tenor.com/images/e4e5bf50e13496ef5b2fac3768c5e31d/tenor.gif?itemid=12883008","https://media1.tenor.com/images/963dbf83410067b8216bf3fbeec50874/tenor.gif?itemid=5012719","https://media1.tenor.com/images/574e0a91548cf61405b1b88e331a43e3/tenor.gif?itemid=4736054","https://media1.tenor.com/images/a4c86162fae0569f39a1928e0a56a4d3/tenor.gif?itemid=11898460"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está diciendo a si mismo que ha cometido un fail.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} ha cometido un fail.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} le está restregando a ${mention} que ha cometido un fail.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "fail"
  }