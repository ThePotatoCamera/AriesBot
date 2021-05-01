exports.run = (client, message, args) => {
    
    let reporte = args.slice(0).join(" ")

    if (!args[0]) return message.author.send("Por favor, añade el reporte en forma de mensaje.").catch(()=>{ message.channel.send( "Activa los MD (mensajes directos), porfavor");return})
    .then (message.delete());
    
    message.delete();
    client.guilds.cache.get(`678282402979905547`).client.channels.cache.get('681147632340566055').send({embed: {
        color: 3447003,
        description: reporte,
        timestamp: new Date(),
        footer: {
            icon_url: message.author.avatarURL,
            text: `Mensaje enviado por: ${message.author.tag} (${message.author.id})`
          }
      }}).then(
          message.author.send(`Reporte enviado, recuerda que puedes unirte al servidor de soporte con **d!soporte**.`).catch(()=>{ message.channel.send( "Reporte enviado");return})
      )
};
module.exports.help = {
    name: "reportar"
  }