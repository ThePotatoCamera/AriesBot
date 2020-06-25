module.exports.run = (client, message, args) => {

	const server = client.guilds.get('678282402979905547');
    const staff = server.roles.get('681152401109024781').id;
	   if (message.member.roles.some(r => r.id == staff)) {
		console.log(`${message.author.tag} (${message.author.id}) ha reiniciado el bot.`)
		message.channel.send('Reiniciando Aries...')
		client.destroy();
		client.login(process.env.TOKEN)
		.then(() => message.reply("¡Bot reiniciado!"));
	   }
	   else return message.channel.send("Comando disponible solo para el staff de Aries Bot.")
	}
module.exports.help = {
    name: "reiniciar"
  }
