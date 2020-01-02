module.exports.run = async (client, message) => {

       const server = client.guilds.get('485503371441078294');
       const staff = server.roles.get('662288430323204096');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
        message.channel.send(`${client.guilds.map(g => g.name).join("\n")}`);
       }else return message.channel.send("Comando disponible solo para el staff de Aries Bot")
  }
  
  module.exports.help = {
      name: "nombreservidores"
    }