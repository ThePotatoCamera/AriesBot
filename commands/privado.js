const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(message.member.roles.some(r=>["staff"].includes(r.name)) ) {
       const mention = message.mentions.users.first();
       const mensaje = args.slice(1).join(" ")  
       if(!mention) message.channel.send("Porfavor menciona a alguien")
       if(!mensaje) message.channel.send("Porfavor pon un mensaje")
       mention.send(mensaje)
      } else {
        message.channel.send("***Comando disponible solo para el staff de Aries Bot***")
      }
       
}
    module.exports.help = {
        name: "privado"
      }