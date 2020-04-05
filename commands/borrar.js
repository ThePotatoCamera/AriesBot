module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos");
  if(message.channel.name == undefined) return message.channel.send("No puedo borrar mensajes en canales privados")
  if (isNaN(args[0])) return message.channel.send("Por favor, envía un número válido. (Máx. 100)");
  if (args[0] > 100) return message.channel.send(`Por favor, pon un número menor a 100.`);
  message.channel.bulkDelete(1).then(
  message.channel.bulkDelete(args[0]))
    .then( message.channel.send("`Mensajes borrados.`"))
    .catch( error => message.channel.send(`Error: ${error.message}`));
}
  module.exports.help = {
      name: "borrar"
    }  