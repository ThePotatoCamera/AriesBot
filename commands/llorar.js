exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
       const images = ["https://i.ibb.co/cTTWYZq/1548614546421.gif","https://media1.tenor.com/images/6e86d66f72595a6d2c6843663376177e/tenor.gif?itemid=13425431","https://i.pinimg.com/originals/0d/16/04/0d1604c5acf3da9c542dcda0af1bf83d.gif","https://66.media.tumblr.com/ba93029e9bc67a304d6d40460552300d/tumblr_motui6zeYD1rqhjvfo1_500.gif","https://media1.tenor.com/images/9f1fc475633662e60d832478eff0b17f/tenor.gif?itemid=4882104","https://media1.tenor.com/images/3cbd8e2edf3cb8b41e9475a0704d9de0/tenor.gif?itemid=12209179","https://media1.tenor.com/images/00f9d49e6d011d40fe12e90de95136ce/tenor.gif?itemid=9340219","https://media1.tenor.com/images/5221203dc94b7a099b430e44a41e6c73/tenor.gif?itemid=5047945","https://media.giphy.com/media/4NuAILyDbmD16/giphy.gif","https://media1.tenor.com/images/2902af3471e18090270b7f0121495e8a/tenor.gif?itemid=7753990","https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif","https://media.giphy.com/media/5t4gifYFrcwAcxt6t3/giphy.gif","https://media1.tenor.com/images/445c3de1f9a6a87694bcbb2739d35451/tenor.gif?itemid=8312712","https://media.giphy.com/media/shVJpcnY5MZVK/giphy.gif","https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif","https://media1.tenor.com/images/6502ef6a9c10a1913e880b285aabcb04/tenor.gif?itemid=5619724","https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif","https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif","https://media1.tenor.com/images/0bb6cdfb2743738420e8b14a5d3963e9/tenor.gif?itemid=7056397","https://media.giphy.com/media/3ohjUW8ME9uHDh8EI8/giphy.gif","https://media1.tenor.com/images/bf328f0b087f8f1a87868a457c1c3c22/tenor.gif?itemid=11632810","https://media.giphy.com/media/yarJ7WfdKiAkE/giphy.gif","https://media1.tenor.com/images/901e352c6d6fa11a50b6da8e5cffd7ae/tenor.gif?itemid=10582639","https://media.giphy.com/media/l378ejxoQzb5aXsd2/giphy.gif","https://media.giphy.com/media/kDyIHURuVGVuo/giphy.gif","https://media1.tenor.com/images/d620f43fcc7dba0a79712b6d41a8ed2d/tenor.gif?itemid=12071034","https://media.giphy.com/media/T4COazRlurxKM/giphy.gif","https://media.giphy.com/media/b9wQvtFlehup2/giphy.gif","https://media.giphy.com/media/ZlWplgoWyskQo/giphy.gif","https://media1.tenor.com/images/2d1b1041c66bb53e778e5ebcb39258aa/tenor.gif?itemid=8942905","https://media.giphy.com/media/cLfRODJCeUOti/giphy.gif","https://media1.tenor.com/images/d4a3ce2e89669ffbd2d1c62c9b1769d6/tenor.gif?itemid=7999979","https://media.giphy.com/media/3VDi4H1JFCql2/giphy.gif","https://media.giphy.com/media/BdgVpHDiY9Ago/giphy.gif","https://media1.tenor.com/images/40bb68680f5a12431e1d64e46c685770/tenor.gif?itemid=5643409","https://media.giphy.com/media/enp5EEnd1wlLq/giphy.gif","https://media1.tenor.com/images/38dab3a80f57de74359633fd313342e8/tenor.gif?itemid=4854830","https://media.giphy.com/media/tvYTtRTrSkr3W/giphy.gif","https://media.giphy.com/media/N0zizM2fKgGm4/giphy.gif","https://media1.tenor.com/images/213ec50caaf02d27d358363016204d1d/tenor.gif?itemid=4553386","https://media.tenor.com/images/4e83ac716c038c021e5921d6abfd93b6/tenor.gif","https://media1.tenor.com/images/eec7fd5dc29d369d90294f65ed21d514/tenor.gif?itemid=5590889","https://media1.tenor.com/images/697f6af789ffb16ac8f2dfd46f67a1e4/tenor.gif?itemid=5688716"];	
	   const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está llorando por su culpa.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está llorando.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está llorando por culpa de ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "llorar"
  }