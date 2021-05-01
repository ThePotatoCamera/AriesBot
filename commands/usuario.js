const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado.")
    let miembro = message.mentions.members.first()
    if(!miembro) return message.channel.send("Debes mencionar a alguien.")

    let estados ={
      "online": "Conectado",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline": "Desconectado/invisible"
    };

  const embed = new Discord.MessageEmbed()
    .addField("***Información de usuario***", miembro.tag)
    .setThumbnail(miembro.avatarURL)
    .addField('ID:', miembro.id, false)
    .addField('Cuenta creada el:', miembro.createdAt)
    .addField("Presencia:", estados[miembro.user.presence.status], true)
    .setTimestamp()
    .setColor("#FF9900")
    
  message.channel.send({ embed });
   
}

module.exports.help = {
    name: "usuario"
  }