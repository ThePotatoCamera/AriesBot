const Discord = require('discord.js');

exports.run = (client, message, args) => {

       const server = client.guilds.get('678282402979905547');
       const staff = server.roles.get('681152401109024781');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
		if(!args[0]) return message.channel.send("Por favor, pon un comando para recargar.")

		let commandName = args[0].toLowerCase()
		
		try {
			delete require.cache[require.resolve(`./${commandName}.js`)]
			client.commands.delete(commandName)
			const pull = require(`./${commandName}`)
			client.commands.set(commandName, pull)
		} catch(e) {
			message.channel.send(`No se pudo recargar el comando \`${args[0]}\`, revisa la consola para más información.`)
			return console.error(e);
		}
		message.channel.send(`El comando \`${args[0]}\` ha sido recargado`)
	} else {
		message.channel.send("Lo siento, no tienes permiso para ejecutar este comando.")
	  }
	}
	   module.exports.help = {
		name: "recargar"
	  }