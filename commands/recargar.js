const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	module.exports.run = async (bot, message, args, client) => {

		if(message.member.roles.some(r=>["staff"].includes(r.name)) ) {
			if(!args[0]) return message.channel.send("Porfavor pon un comando para recargar")

			let commandName = args[0].toLowerCase()
			
			try {
				delete require.cache[require.resolve(`./${commandName}.js`)]
				bot.commands.delete(commandName)
				const pull = require(`./${commandName}`)
				bot.commands.set(commandName, pull)
			} catch(e) {
				return message.channel.send(`No se pudo recargar el comando: \`${args[0]}\``)
			}
			message.channel.send(`El comando \`${args[0]}\` a sido recargado`)
			
		} else {
		  message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
		}
		}
}

module.exports.help = {
    name: "recargar"
  }