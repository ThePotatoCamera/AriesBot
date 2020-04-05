const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === false) return message.channel.send(`${message.author}, ***<:NO_NSFW:681246772290781237> No puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237> `)
    let replies = ["Manda una foto masturbándote en un grupo donde esté tu novia/o y mencionala/o diciendo `Hola mi princesa/principe UwU` (NO hace falta mostrar la cara y por favor, respetar las normas del grupo).","Manda un vídeo a tu novia/o bailando el baile del Fornite. Pero al final del video enseñas tus partes íntimas.","Manda a tu novio/a una foto tuya de cuerpo entero donde estes desnudo/a.","Manda una foto a tu novio/a chupando cualquier cosa de manera provocativa.","Manda a tu novio/a un vídeo tuyo quitandote la ropa hasta que estes en ropa interior (tú elijes si te quedas completamente sin ropa).","Manda un gif NSFW (d!chuparla) a un contacto de tu dis que te caiga mal","Manda a un contacto de tu dis un gif NSFW (d!masturbarse) y di `Hola guap@ 7w7 estoy pensando en ti UwU`","Manda un gif NSFW (d!chuparla) a un contacto de tu dis","Manda una NUDE (foto de tus partes intimas) a tu novio/a","Manda un GIF NSFW (d!follar) a un contacto de tu lista de amigos."]
    let result = Math.floor((Math.random() * replies.length))

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("**Aries dice**:", replies[result])
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "ariesdicensfw",
      }  