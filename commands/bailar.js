exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
		const images = ["https://media1.tenor.com/images/463f45ffb750b8667b9adf1e9c81bbad/tenor.gif?itemid=13975078","https://media1.tenor.com/images/ce203d1bd752c62caa7aab6d6c0b5dd1/tenor.gif?itemid=5319769","https://media1.tenor.com/images/ef1534a0aa151a75d22742618d882888/tenor.gif?itemid=5637723","https://media1.tenor.com/images/44f162901b9f03ddbde93021942be503/tenor.gif?itemid=12905839","https://media1.tenor.com/images/4db9a9c0bdf818da5c09bc8c79835474/tenor.gif?itemid=5182941","https://media1.tenor.com/images/f9733f3b4cc2d59fe251939dc7e94e05/tenor.gif?itemid=3553857","https://media.tenor.com/images/a5948da97b871af959cacf0ecc06f038/tenor.gif","https://media1.tenor.com/images/2f7e3b5818b6ceb735ea78c8a05bd72a/tenor.gif?itemid=13410266","https://media1.tenor.com/images/61cf901b1c520204c5c185d4a4244b78/tenor.gif?itemid=13410605","https://media1.tenor.com/images/86429555ea31f86a7be67e458c64dd29/tenor.gif?itemid=13392435","https://media1.tenor.com/images/b6b4ded4bd797b093cc9b68aa6fba694/tenor.gif?itemid=13410270","https://media1.tenor.com/images/448f0efa52c79cfb7f05e3ddc8725c9e/tenor.gif?itemid=12385396","https://media1.tenor.com/images/d329192d75e9861e9427b00eb4acf7c6/tenor.gif?itemid=13451599","https://media1.tenor.com/images/ef162ab606d40b63b888f5bc299ac527/tenor.gif?itemid=13451504","https://media1.tenor.com/images/8a2e22ee850f5b6ce80223c3dda78273/tenor.gif?itemid=13451376","https://media1.tenor.com/images/f50bf1331c589ab4d019935dd69a9e61/tenor.gif?itemid=13451351","https://media.tenor.com/images/a4786d43fc98bc989bef9d585e493d89/tenor.gif","https://media1.tenor.com/images/cb20582abf71949be2166436561c4d89/tenor.gif?itemid=9996746","https://media1.tenor.com/images/4b9a668caaf7b35bd2662a53f1f93394/tenor.gif?itemid=9170356","https://media1.tenor.com/images/5c920774ee1ed8952c9fb46eb2503fea/tenor.gif?itemid=6073267","https://media1.tenor.com/images/a6cc6eae06ebd5c06ac2eec4db152248/tenor.gif?itemid=8994847","https://media1.tenor.com/images/c97dcb8a3bdd8744af79cd909cd0ef7e/tenor.gif?itemid=9405652","https://media1.tenor.com/images/94b361feec5290565923ebf2e568c882/tenor.gif?itemid=4806077","https://media1.tenor.com/images/b05ef1247b98d2cfd89b0c7c64a7058d/tenor.gif?itemid=6090999","https://media1.tenor.com/images/08304f8c9c18dee5448de2011a3b33a3/tenor.gif?itemid=5828280","https://media1.tenor.com/images/655bb4a1445d99935294f1f5c3ef1a3f/tenor.gif?itemid=9405776","https://media1.tenor.com/images/93b4a38ae8796db08e18487bf946c27d/tenor.gif?itemid=4296848","https://media1.tenor.com/images/ee5c1e955ef702c341ede9d389c3f7bd/tenor.gif?itemid=6102054","https://media.giphy.com/media/iBDhjSqMAE7uw/giphy.gif","https://media1.tenor.com/images/528740cb6232ace8c86944eab73200c0/tenor.gif?itemid=13038642","https://media1.tenor.com/images/7f52564b87d841ef0a6338af1821fbdd/tenor.gif?itemid=8108798","https://media1.tenor.com/images/97644626684a5cc3f833cd471ef893ea/tenor.gif?itemid=5090779","https://media1.tenor.com/images/f246ca0ec754a01044bc39857883fafb/tenor.gif?itemid=10464470","https://media1.tenor.com/images/e2507316bfab7aa033518fea70af0698/tenor.gif?itemid=5033706","https://media1.tenor.com/images/5a430156f27b7325344016679fed102f/tenor.gif?itemid=10459822","https://media1.tenor.com/images/9fa021f01b8b71128204bed40e8b909d/tenor.gif?itemid=9214665","https://media1.tenor.com/images/d5bd643d52fd0d22922964d0b2838c1b/tenor.gif?itemid=5474869","https://media1.tenor.com/images/c516ca70e76578431857f15f880a93f2/tenor.gif?itemid=9214433","https://media1.tenor.com/images/0c2d876f08b147b72c60bec71e884125/tenor.gif?itemid=4915339"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está bailando solo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está bailando solo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} baila junto a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "bailar"
  }