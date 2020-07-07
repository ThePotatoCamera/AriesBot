const Discord = require('discord.js');

exports.run = (client, message, args) => {

       const server = client.guilds.cache.get('678282402979905547');
       const staff = server.roles.cache.get('681152401109024781');
       
       if (staff.members.get(message.author.id)) { 
       
        const mention = message.mentions.users.first();
        const mensaje = args.slice(1).join(" ");
       
        if(!mention) message.channel.send("Por favor, menciona a alguien.");
        if(!mensaje) message.channel.send("Por favor, pon un mensaje.");
       
        mention.send(mensaje);
        message.channel.send("***Mensaje enviado***");
       
      } else return message.channel.send("Lo siento, no tienes permiso para ejecutar este comando.");

}
    module.exports.help = {
        name: "privado"
      }