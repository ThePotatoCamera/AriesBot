const Discord = require("discord.js");

module.exports.run = async (bot, message, botconfig) => {
    const embed = new Discord.RichEmbed() 
    .setTitle("Este es el historial de versiones:")
    .addBlankField()
    .setColor(0x00AE86)
    .addField("1.0.0:","Cambio de host,añadidos más gifs,cambio interno en el comando ayuda y arreglados bugs **(E empezado de nuevo el orden de versiones por que se estaba usando mal)**")
    .addField("2.0.0:","Cambiado el sistema de comandos y arreglados bugs")
    .addField("2.1.0:","Añadido el comando **emoticono** y arreglado bugs")
    .addField("2.2.0:","Añadido el comando **cartas**")
    .addField("2.3.0:","Añadido el comando **servidores**")
    .addField("2.4.0:","Añadido el comando **votar** y añadido al comando 'redes' el link a la página de discordbots")
    .addField("2.5.0:","Añadidos los comandos **masturbarse,soporte,tocar** y añadidos más gifs a algunos comandos")
    .addField("3.0.0:","Cambiado el sistema de __**TODOS**__ los comandos sociales para que poner mas interaccion **(casi todos los comandos ahora tienen 3 mensajes distintos segun como se usen)**.")
    .addField("3.1.0","Añadido el sistema **afk**")
    .addField("4.0.0","Añadido el sistema de **prefix personalizado** y cambios en el comando de `ayuda` para adaptalo al nuevo sistema")
    .addField("4.2.0","Quitado el sistema de **prefix personalizado** (daba demasiados problemas), Añadidos los comandos `tonto`,`felicidades`,`reportar` y `perro`, Añadidos mas gifs a algunos comandos")
    .addField("4.3.0","Añadidos los comandos `amor`,`ariesdice`,`ariesdicensfw` añadidos mas gifs y arreglados un par de bugs")
    .addField("4.3.1","Quitados los comandos `ban` y `kick` por problemas")
    .addField("4.4.0","Añadids los comandos `ppt`,`spoiler` y `codigo`.Cambiado el link del comando `soporte`")
    .setFooter("Mensaje enviado")
    .setTimestamp()
  
    message.author.send(embed); 
     message.react("📩")
                                      
}

module.exports.help = {
    name: "hversion"
  }