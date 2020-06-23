const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed() 
    .setTitle("Hola!")
    .setColor(0x00AE86)
    .addField("Me presento:",("Soy una Bot diseñada enteramente en español,dispongo de una gran variedad de funciones,aunque la intención de mis creadores es cada día mejorarme un poco más."))   
    .addField("Bueno,una vez hechas las presentaciones espero podamos ser todos amigos",`${message.author}`)
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send({embed}); 
}

module.exports.help = {
    name: "presentacion"
  }