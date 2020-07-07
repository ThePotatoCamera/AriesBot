exports.run = async (client, message, args) => {
	const Discord = require('discord.js');

		const images = ["https://media1.tenor.com/images/f3fd855b33cc9a4c2cdace99c8313287/tenor.gif?itemid=13906991","https://media1.tenor.com/images/b43c425daabd745f501af186c8e0a5ed/tenor.gif?itemid=10801610","https://media1.tenor.com/images/1506a5f0274a81e2d966a65e6b66d40b/tenor.gif?itemid=10028599","https://media1.tenor.com/images/8c267e6395e74221cadb4f2c18f07d65/tenor.gif?itemid=4780182","https://media.giphy.com/media/kdRqNVdQAkqTooB2Ly/giphy.gif","http://giphygifs.s3.amazonaws.com/media/9MxYQnbTfiyIg/giphy.gif","https://media.giphy.com/media/Wmhy4DGpU7brHsCY38/giphy.gif","https://media.giphy.com/media/LOKQ06qppbrB6ZMivo/giphy.gif","https://media.giphy.com/media/3jeMMSx0uXZaaiE1qy/giphy.gif"];
		const mention = message.mentions.users.first();
		if (!message.guild) return message.channel.send('No puedes ejecutar este comando en un canal privado.');
		if (message.author == mention) {
			const description = await setDescription(message.author);
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(description)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} asustó a... nadie.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} está asustando a ${mention}, espero que ya no tenga hipo.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

	async function setDescription(author) {
		const tablas = require('../index.js');
		const authorid = author.id;
		const chico = `${author} está asustado de si mismo.`
		const chica = `${author} está asustada de si misma.`
		const nodefined = `${author} se ha asustado con su propia sombra.`
		const genero = await tablas.tablaGeneros.findOne({
			where: {
				IDusuario: authorid
			}
		});
		if (genero.get('genero') == 1) {
			return chico;
		}
		else if (genero.get('genero') == 2) {
			return chica;
		}
		else {
			return nodefined;
		}
	}

module.exports.help = {
    name: "asustar"
  }