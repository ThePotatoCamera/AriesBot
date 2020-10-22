exports.run = async (client, message, args) => {
	const Discord = require('discord.js');
	if (!message.guild) return message.channel.send('No puedes ejecutar este comando en un canal privado.');
	if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237>`)
		const mention = message.mentions.users.first();
		if (message.author == mention) {
			message.channel.send("Por favor, menciona a alguien.")
		}
		else if (args < 1) {
			message.channel.send("Por favor, menciona a alguien.")
		}
		else {
			let user = message.mentions.members.first()
      		if (!user) return message.channel.send("Por favor, menciona a alguien.");
	  		const randomImage = await randomItem(message.author.id);		
	  		const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} le está comiedo todo a ${mention}.`)
				.setImage(randomImage);

			message.channel.send({ embed });
		}
	}

	async function randomItem(authorid) {
		const tablas = require('../index.js');
		const chico = ["https://i.ibb.co/k9md3P7/Random-hentai-gif-NB0103.gif","https://i.ibb.co/fS8H8Sh/Random-hentai-gif-NB0406.gif","https://i.ibb.co/bd6sb2m/Random-hentai-gif-NB0130.gif"];
		const chica = ["https://i.ibb.co/Gn8TTVN/Random-hentai-gif-NB-0295.gif","https://i.ibb.co/513XRZk/g1ca8rvu4mzptlk9n27s.gif","https://i.ibb.co/ch01BvP/cum17.gif","https://i.ibb.co/0nX4z0C/Random-hentai-gif-NB-1473.gif"];
		const images = ["https://i.ibb.co/k9md3P7/Random-hentai-gif-NB0103.gif","https://i.ibb.co/fS8H8Sh/Random-hentai-gif-NB0406.gif","https://i.ibb.co/bd6sb2m/Random-hentai-gif-NB0130.gif","https://i.ibb.co/Gn8TTVN/Random-hentai-gif-NB-0295.gif","https://i.ibb.co/513XRZk/g1ca8rvu4mzptlk9n27s.gif","https://i.ibb.co/ch01BvP/cum17.gif","https://i.ibb.co/0nX4z0C/Random-hentai-gif-NB-1473.gif"];
		const genero = await tablas.tablaGeneros.findOne({
			where: {
				IDusuario: authorid
			}
		});
		if (genero.get('genero') == 1) {
			return chico[Math.floor(Math.random() * chico.length)]
		}
		else if (genero.get('genero') == 2) {
			return chica[Math.floor(Math.random() * chica.length)]
		}
		else {
			return images[Math.floor(Math.random() * images.length)];
		}
	}

module.exports.help = {
    name: "chuparla"
  }