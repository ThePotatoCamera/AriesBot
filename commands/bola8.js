const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Que desea preguntarme?")
    let replies = ["Sí.","No.","No lo sé.","Pregunta más tarde.","Eres el mejor.","Obviamente, como para no saberlo.","Tienes toda la razón.","Eso es verdad.","Los astros dicen que no.","Claro que sí guapi :kissing_heart:.","Nico nico niii.","No me cuentes tu vida.","Hubiera estado bien si te hubiera preguntado.","Lo siento pero no.","La respuesta está en tí... igual que la fuerza pequeño padawan.","Si completas la pokédex te contesto.","Cuando Ash gane la liga pokémon te contesto... oh, espera...","Si resuelves esta ecuación te contesto: 'raíz cuadrada de 9567281932.'"]

    let result = Math.floor((Math.random() * replies.length))
    let quiestion = args.slice(0).join(" ")

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .addField("Pregunta:", quiestion)
    .addField("Respuesta:", replies[result])
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "bola8"
      }  