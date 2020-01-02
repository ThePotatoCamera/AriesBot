const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["Mandale un mensaje a tu CRUSH","En un discord aleatorio dale un beso al dueño (d!servidor si no sabes quien es)","En un servidor aleatorio pon en mayúsculas **VIVA ESPAÑA** (Por favor respetar las normas y no lo pongáis en servidores donde este prohibido)","Manda una foto tuya a alguien aleatorio que tengas agregado como amigo (Porfavor que no sean NUDES)","Manda un gif de pegar a tu mejor amigo/a","Canta `Pluma gay` en un canal de voz con gente ( https://youtu.be/Zgxxx_yDveg )","Manda la foto Nº 10 de tu galeria a un amigo/a (Si no tienes 10 o mas manda la ultima foto. Si no tienes fotos haz una de la pared)", "Haz una broma a la persona que amas, Si no amas a nadie haz la broma en un servidor publico (Porfavor siempre respetando las normas)","Manda un video bailando el baile de Fornite a un amigo/a, Si no tienes mandalo a un chat general de discord","Dibuja la foto de perfil de un amigo y luego mandaselo este como este (d!foto [@amigo] para ver su foto mejor)","Dibuja en una hoja de papel un corazón con el nombre de tu crush, saca una foto y mandala al discord que mas gente tenga"]
    let result = Math.floor((Math.random() * replies.length))

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("*Aries dice*:", replies[result])
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "ariesdice",
      }  