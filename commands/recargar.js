const Discord = require('discord.js');

exports.run = (client, message, args) => {

       const server = client.guilds.get('485503371441078294');
       const staff = server.roles.get('662288430323204096');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
		if(!args[0]) return message.channel.send("Porfavor pon un comando para recargar")

		let commandName = args[0].toLowerCase()
		
		try {
			delete require.cache[require.resolve(`./${commandName}.js`)]
			client.commands.delete(commandName)
			const pull = require(`./${commandName}`)
			client.commands.set(commandName, pull)
		} catch(e) {
			return message.channel.send(`No se pudo recargar el comando: \`${args[0]}\``)
		}
		message.channel.send(`El comando \`${args[0]}\` a sido recargado`)
	} else {
		message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
	  }
	}
	   module.exports.help = {
		name: "recargar"
	  }