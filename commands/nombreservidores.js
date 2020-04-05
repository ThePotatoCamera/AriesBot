module.exports.run = async (client, message) => {

       const server = client.guilds.get('678282402979905547');
       const staff = server.roles.get('681152401109024781');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
        message.channel.send(`${client.guilds.map(g => g.name).join("\n")}`);
       }else return message.channel.send("Lo siento, no tienes permisos suficientes para ejecutar este comando.")
  }
  
  module.exports.help = {
      name: "nombreservidores"
    }