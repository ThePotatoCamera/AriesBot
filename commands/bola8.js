const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Que desea preguntarme?")
    let replies = ["Si","No","No lo se","Pregunta mas tarde","Eres el mejor","Obviamente como para no saberlo","Tienes toda la razón","Eso es verdad","Los astros dicen que no","Claro que si guapi :kissing_heart:","Niko niko niii","No me cuentes tu vida","Hubiera estado bien si te hubiera preguntado","Lo siento pero no","La respuesta esta en ti... igual que la fuerza pequeño padawan","Si completas la pokedex te contesto","Cuando ash gane la liga pokemon te contesto","Si resueves esta ecuación te contesto: 'raíz cuadrada de 9567281932'"]

    let result = Math.floor((Math.random() * replies.length))
    let quiestion = args.slice(0).join(" ")

    let ballembed = new Discord.MessageEmbed()
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