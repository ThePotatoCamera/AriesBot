exports.run = async (client, message, args) => {
	const Discord = require('discord.js');
    if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237>`)
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			message.channel.send("Por favor, menciona a alguien.")
		}
		else if (args < 1) {
			const randomImage = await randomItem(message.author.id);
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está masturbando.`)
				.setImage(randomImage);

			message.channel.send({ embed });
		}
		else {
			const user = message.mentions.members.first()
				  if (!user) return message.channel.send("Por favor, menciona a alguien.");
			const randomImage = randomItem(message.author.id);
			const embed = new Discord.RichEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se está masturbando pensando en ${mention}.`)
				.setImage(randomImage);

			message.channel.send({ embed });
		}
	}

	async function randomItem(authorid) {
		const tablas = require('../index.js');
		const chico = ["https://i.ibb.co/RSJMpMT/boobs-136.gif","https://i.ibb.co/ZWSsyvP/descarga.gif","https://i.ibb.co/BjQhK4S/Pwank-265.gif"];
		const chica = ["https://i.ibb.co/5xJ7kDw/Pwank-148.gif","https://i.ibb.co/pzxHk8B/boobs-220.gif","https://i.ibb.co/rcWn1Ct/ke7ql46yto2pxjfzgdb1.gif","https://i.ibb.co/pdQXqcZ/Pwank-247.gif","https://i.ibb.co/RhtNwRH/Pwank-085.gif","https://i.ibb.co/fDJTf7G/boobs-400.gif","https://i.ibb.co/19yypwm/Pwank-270.gif","https://i.ibb.co/0FZGjzM/Pwank-086.gif","https://i.ibb.co/qYDZjSt/Random-hentai-gif-NB0730.gif","https://i.ibb.co/WDhTPh5/w5rhm7zfdtu9vsanbg6y.gif","https://i.ibb.co/kyp2Kkt/descarga2.gif","https://i.ibb.co/z5KHmz3/Pwank-137.gif","https://i.ibb.co/b5m7sqn/Pwank-233.gif"];
		const images = ["https://i.ibb.co/RSJMpMT/boobs-136.gif","https://i.ibb.co/ZWSsyvP/descarga.gif","https://i.ibb.co/BjQhK4S/Pwank-265.gif","https://i.ibb.co/5xJ7kDw/Pwank-148.gif","https://i.ibb.co/pzxHk8B/boobs-220.gif","https://i.ibb.co/rcWn1Ct/ke7ql46yto2pxjfzgdb1.gif","https://i.ibb.co/pdQXqcZ/Pwank-247.gif","https://i.ibb.co/RhtNwRH/Pwank-085.gif","https://i.ibb.co/fDJTf7G/boobs-400.gif","https://i.ibb.co/19yypwm/Pwank-270.gif","https://i.ibb.co/0FZGjzM/Pwank-086.gif","https://i.ibb.co/qYDZjSt/Random-hentai-gif-NB0730.gif","https://i.ibb.co/WDhTPh5/w5rhm7zfdtu9vsanbg6y.gif","https://i.ibb.co/kyp2Kkt/descarga2.gif","https://i.ibb.co/z5KHmz3/Pwank-137.gif","https://i.ibb.co/b5m7sqn/Pwank-233.gif"];
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
    name: "masturbarse"
  }