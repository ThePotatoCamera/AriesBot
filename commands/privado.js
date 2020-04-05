const Discord = require('discord.js');

exports.run = (client, message, args) => {

       const server = client.guilds.get('678282402979905547');
       const staff = server.roles.get('681152401109024781');
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