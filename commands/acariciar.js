exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://i.ibb.co/1J61xzV/UJYE7jJ.gif","https://i.ibb.co/Yfs8KcZ/tumblr-pl2i88j-Px-I1th206io1-400.gif","https://media1.tenor.com/images/cc283ad538979f8b0b133b5a9c7d6539/tenor.gif?itemid=9339959","https://media1.tenor.com/images/a9c432b12de02d8c739a59c562a312dd/tenor.gif?itemid=12276434","https://media1.tenor.com/images/a9c432b12de02d8c739a59c562a312dd/tenor.gif?itemid=12276434","https://media1.tenor.com/images/c8f71cf1c0d7febe92b4410d99165e17/tenor.gif?itemid=9096332","https://media1.tenor.com/images/9ed76702533ad60bf84e8cfd15337465/tenor.gif?itemid=10289518","https://media1.tenor.com/images/a1ac974028ad435df6d81ccb81348163/tenor.gif?itemid=12190585","https://media1.tenor.com/images/fca73b94fe0aa317aacd1b21c178f39d/tenor.gif?itemid=7616554","https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286","https://media1.tenor.com/images/1eff403923e64a2a117d94a1ac45b93f/tenor.gif?itemid=11091611","https://media1.tenor.com/images/a4a2b1eaa47fd0d8d0951433bc59ab9a/tenor.gif?itemid=5359308","https://media1.tenor.com/images/265d85a642cb12741321c0ddac1bd523/tenor.gif?itemid=9032323","https://media1.tenor.com/images/cb2f75a027d295805797e5661dcf38a2/tenor.gif?itemid=9096297","https://media1.tenor.com/images/e548738e5a2f289912a305c07d2463f8/tenor.gif?itemid=11468253","https://media1.tenor.com/images/9640f2093221922c6bc3b335021eb4d0/tenor.gif?itemid=7516528","https://media1.tenor.com/images/7f036aaed5f791dc72e0a62a8e1d4c5d/tenor.gif?itemid=9096301","https://media1.tenor.com/images/b50a57eebaf21e6fc854320f498164f1/tenor.gif?itemid=10034299","https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926","https://media1.tenor.com/images/d1176e55119163d2e90f81f1aee9ded3/tenor.gif?itemid=5661257","https://media1.tenor.com/images/1a8e560e8873ce2a48b3dfbbaa7805ec/tenor.gif?itemid=11118254","https://media1.tenor.com/images/0bc601a1d3954c65bd995278ea9d1161/tenor.gif?itemid=9096264","https://media1.tenor.com/images/6e1cbdce3d65281c367648269db2a5d6/tenor.gif?itemid=10703707","https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932","https://media1.tenor.com/images/f84757f41950af0150b6a5bd0dc5e27b/tenor.gif?itemid=9394441"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está acariciendo a sí mismo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} acaricia al aire.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`¡Que bonito! ${message.author} está acariciando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "acariciar"
  }