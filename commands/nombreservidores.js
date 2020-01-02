module.exports.run = async (bot, message, args, client) => {

  if(message.member.roles.some(r=>["staff"].includes(r.name)) ) {
    message.channel.send(`${bot.guilds.map(g => g.name).join("\n")}`);
  } else {
    message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
  }
  }
  
  module.exports.help = {
      name: "servidoresnombres"
    }