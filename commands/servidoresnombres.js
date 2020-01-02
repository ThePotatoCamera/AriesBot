module.exports.run = async (bot, message, args) => {
    if(message.author.id != "464064731330773002") return message.channel.send("No eres el dueño del bot!")
    message.channel.send(`${bot.guilds.map(g => g.name).join("\n")}`);
    
    }
    
    module.exports.help = {
        name: "servidoresnombres"
      }