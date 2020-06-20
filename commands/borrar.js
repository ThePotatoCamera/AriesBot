module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos");
  
  if(message.channel.name == undefined) return message.channel.send("No puedo borrar mensajes en canales privados")
  
  if (isNaN(args[0])) return message.channel.send("Por favor, envía un número entre 1 y 99.");
  
  if (args[0] > 100) return message.channel.send(`Por favor, pon un número menor a 100.`);
  
  message.channel.bulkDelete(1).then( 
  
    message.channel.bulkDelete(args[0], false)
    .then(message.channel.send("`Mensajes borrados`"))
    .catch(e => {
      if (e.name == 'DiscordAPIError') {
        message.channel.bulkDelete(args[0] + 1, true);
        message.channel.send('Hay mensajes más viejos que dos semanas y no se han podido eliminar, el resto han sido eliminados satisfactoriamente.');
      }
      else {
      console.error(`Error: ${e}`);
      message.channel.bulkDelete(1);
      message.channel.send('Ha ocurrido un error al intentar eliminar los mensajes.');
      }
    }));
  }
  
    module.exports.help = {
      name: "borrar"
    }