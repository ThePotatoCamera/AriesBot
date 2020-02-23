module.exports.run = async (bot, message) => {

	const server = client.guilds.get('678282402979905547');
    const staff = server.roles.get('681152401109024781');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
		message.reply('Reiniciando el bot...')
		bot.destroy();
		bot.login(process.env.TOKEN)
		.then(() => message.reply("Bot reiniciado"));
       }else return message.channel.send("Comando disponible solo para el staff de Aries Bot")
	}
module.exports.help = {
    name: "reiniciar"
  }