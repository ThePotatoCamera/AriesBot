module.exports.run = async (client, message) => {
  const server = client.guilds.get('678282402979905547');
  const staff = server.roles.get('681152401109024781');
  if (server.member(message.author).roles.some(r => [staff].includes(r))) {
  const Discord = require ("discord.js");
// Aquí estaremos mapeando los nombres de los servidores.
pequeños = client.guilds.filter(g => g.memberCount <10).map(g => g.name).join("\n");
medianos = client.guilds.filter(g => g.memberCount >10).map(g => g.name).join("\n");
grandes = client.guilds.filter(g => g.memberCount >30).map(g => g.name).join("\n");
gigantes = client.guilds.filter(g => g.memberCount >50).map(g => g.name).join("\n");
infinitos = client.guilds.filter(g => g.memberCount >150).map(g => g.name).join("\n");

// Creamos un embed y agregamos la variable "mapServer" con el texto mapeado anteriormente.
let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .addField("Servidores pequeños (menos de 10 usuarios)",`**Lista:** ${pequeños}`)
  .addField("Servidores medianos (Entre 10 y 30 usuario)",`**Lista:** ${medianos}`)
  .addField("Servidores grandes (Entre 30 y 50 usuarios)",`**Lista:** ${grandes}`)
  .addField("Servidores gigantes (entre 50 y 150 usuarios)",`**Lista:** ${gigantes}`)
  .addField("Servidores infinitos (Mas de 150 usuarios)",`**Lista:** ${infinitos}`)


// Enviamos el embed
message.channel.send(embed); 
} else {
  message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
  }
}
  module.exports.help = {
      name: "nombreservidores"
    }