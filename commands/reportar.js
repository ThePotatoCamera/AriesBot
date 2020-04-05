exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const fs = require(`fs`);
    const botconfig = require("../botconfig.json");
    
    let reporte = args.slice(0).join(" ")

    if (!args[0]) return message.channel.send("Por favor, añade el reporte en forma de mensaje.")
    
    client.guilds.get(`678282402979905547`).client.channels.get('681147632340566055').send({embed: {
        color: 3447003,
        description: reporte,
        timestamp: new Date(),
        footer: {
            icon_url: message.author.avatarURL,
            text: `Mensaje enviado por: ${message.author.tag} (${message.author.id}).`
          }
      }}).then(message.channel.send(`Reporte enviado, recuerda que puedes unirte al servidor de soporte con **d!soporte**`))
};
module.exports.help = {
    name: "reportar"
  }