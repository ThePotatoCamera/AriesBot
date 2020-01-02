const Discord = require('discord.js');

exports.run = (client, message, args) => {

       const server = client.guilds.get('485503371441078294');
       const staff = server.roles.get('662288430323204096');
       if (server.member(message.author).roles.some(r => [staff].includes(r))) {
       const mention = message.mentions.users.first();
       const mensaje = args.slice(1).join(" ")  
       if(!mention) message.channel.send("Porfavor menciona a alguien")
       if(!mensaje) message.channel.send("Porfavor pon un mensaje")
       mention.send(mensaje)
       message.channel.send("***Mensaje enviado***")
       }else return message.channel.send("Comando disponible solo para el staff de Aries Bot")

}
    module.exports.help = {
        name: "privado"
      }