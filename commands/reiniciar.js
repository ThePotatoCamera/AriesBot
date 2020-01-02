module.exports.run = async (bot, message) => {

	if(message.member.roles.some(r=>["staff"].includes(r.name)) ) {
		message.reply('Reiniciando el bot...')
		bot.destroy();
		bot.login(process.env.TOKEN)
		.then(() => message.reply("Bot reiniciado"));
	  } else {
		message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
	  }
	}
module.exports.help = {
    name: "reiniciar"
  }