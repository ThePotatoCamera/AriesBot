exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://i.ibb.co/DQ5tRnL/tenor-11.gif","https://i.ibb.co/CBnpLXd/Admirable-Untimely-Gharial-size-restricted.gif","https://media1.tenor.com/images/9ed18e229bde8a4cd47f1587c887c5ac/tenor.gif?itemid=5428628","https://media1.tenor.com/images/0b94e1571c6e502b5efbad3d624c477d/tenor.gif?itemid=5035685","https://media1.tenor.com/images/a9acc9e21d5ca8fc9ffbe60ca92e8fa4/tenor.gif?itemid=4502686","https://media1.tenor.com/images/63fba2662d7f02a8aad6164589d37e02/tenor.gif?itemid=4488636","https://media1.tenor.com/images/0b2c347dd81ad7c47a29efd246443ddd/tenor.gif?itemid=5085043","https://media1.tenor.com/images/cf4b874a22b949ea8645f511b0403e85/tenor.gif?itemid=6203356","https://media1.tenor.com/images/cff0ef23494d966f4c3a9d80384fa7d8/tenor.gif?itemid=5455633","https://media1.tenor.com/images/91450ccfb53784ff2c6c2112474a1a86/tenor.gif?itemid=6203381","https://media1.tenor.com/images/6ff0bc2c8cf528f6eb42b7ce8c10aa4e/tenor.gif?itemid=12390054","https://media1.tenor.com/images/2a4e4926c89a48763d83d2d363d338df/tenor.gif?itemid=4744629","https://media1.tenor.com/images/e0f1beaf7251ee73ec5eb5fff1ec824c/tenor.gif?itemid=6203303","https://media1.tenor.com/images/c8d2e525f3ca61de2e1f75dce53d97f7/tenor.gif?itemid=8558979","https://media1.tenor.com/images/ffd879d8f260118f6c1b4fd3677e36df/tenor.gif?itemid=7230675","https://media1.tenor.com/images/c8d2e525f3ca61de2e1f75dce53d97f7/tenor.gif?itemid=8558979","https://media1.tenor.com/images/4aa5e40556f07c4bbfcba7e7c0e2b080/tenor.gif?itemid=5455616","https://media1.giphy.com/media/14igRO8Okm42rK/giphy.gif?cid=3640f6095be090724679756245bc4acf","https://media1.tenor.com/images/7f33306474212e6256be3b781ef84ac7/tenor.gif?itemid=3551541", "https://media1.tenor.com/images/9241af4b5730650c9aeeaa87e5f4023e/tenor.gif?itemid=8103670","https://media.tenor.com/images/c712a2728879711714afdedd3ed03ed6/tenor.gif","https://media.tenor.com/images/6e7f6d079d2f5fc903dfb807f5f1bec3/tenor.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta matando`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta matando al aire.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta matando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "matar"
  }