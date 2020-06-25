const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 

	if (args.length == 0) {
		args[0] = 6;
	}

	const caras = args;
	const dado = 1 + Math.floor(Math.random() * caras);

	if (isNaN(caras)) {
		message.channel.send('Argumento no válido, debe ser un número.');
		return;
	}

	if (caras < 2) {
		message.channel.send('El dado tiene que tener al menos dos caras.');
		return;
	}

	message.channel.send(`Has sacado un ${dado} en un dado de ${args} caras.`);
  
}

module.exports.help = {
    name: "dado"
  }