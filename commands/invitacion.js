const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setTitle("Con este link me invitas a tu discord")
    .setColor(0x00AE86)
    .addField("Necesitas tener permisos de administrador en el servidor para poder añadirme","Espero ser de utilidad :smile:")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=498796487715586049&scope=bot&permissions=2146958847")
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send({embed})
}

module.exports.help = {
    name: "invitacion"
  }