const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["Mandale un mensaje a tu **CRUSH**.","En un servidor aleatorio, dale un beso al dueño (d!servidor si no sabes quien es).","En un servidor aleatorio, pon en mayúsculas **VIVA ESPAÑA** (Por favor, respeta las normas y no lo pongáis en servidores donde esté prohibido).","Manda una foto tuya a alguien aleatorio que tengas agregado como amigo (Por favor, que no sean NUDES).","Manda un GIF de pegar a tu mejor amigo/a.","Canta **Pluma gay** en un canal de voz con gente ( https://youtu.be/Zgxxx_yDveg ).","Manda la foto Nº 10 de tu galería a un amigo/a (Si no tienes 10 manda la ultima foto. Si no tienes fotos haz una de la pared).", "Haz una broma a la persona que amas, si no amas a nadie haz la broma en un servidor público (Por favor, siempre respetando las normas).","Manda un vídeo bailando el baile de Fornite a un amigo/a, si no tienes amigos mandalo a un chat general de Discord.","Dibuja la foto de perfil de un amigo y luego mandaselo esté como esté (d!foto [@amigo] para ver su foto mejor).","Dibuja en una hoja de papel un corazón con el nombre de tu crush, saca una foto y mandala a un servidor que compartas con tu crush."]
    let result = Math.floor((Math.random() * replies.length))

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("**Aries dice**:", replies[result])
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "ariesdice",
      }  