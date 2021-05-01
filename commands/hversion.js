const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    const embed = new Discord.MessageEmbed() 
    .setTitle("Este es el historial de versiones:")
    .setColor(0x00AE86)
    .addField("1.0.0:", "Cambio de host, añadidos más GIFs, cambio interno en el comando `ayuda` y arreglados bugs. **(He empezado de nuevo el orden de versiones porque se estaba usando mal)**.")
    .addField("2.0.0:", "Cambiado el sistema de comandos y arreglados bugs.")
    .addField("2.1.0:", "Añadido el comando `emoticono` y arreglado bugs.")
    .addField("2.2.0:", "Añadido el comando `cartas`.")
    .addField("2.3.0:", "Añadido el comando `servidores`.")
    .addField("2.4.0:", "Añadido el comando `votar` y añadido al comando `redes` el link a la página de DiscordBots.")
    .addField("2.5.0:", "Añadidos los comandos `masturbarse`, `soporte`, `tocar` y añadidos más GIFs a algunos comandos.")
    .addField("3.0.0:", "Cambiado el sistema de __**TODOS**__ los comandos sociales para que poner más interacción **(casi todos los comandos ahora tienen 3 mensajes distintos dependiendo de como se usen)**.")
    .addField("3.1.0", "Añadido el sistema **AFK**.")
    .addField("4.0.0", "Añadido el sistema de **prefix personalizado** y cambios en el comando de `ayuda` para adaptalo al nuevo sistema.")
    .addField("4.2.0", "Quitado el sistema de **prefix personalizado** (daba demasiados problemas), añadidos los comandos `tonto`, `felicidades`, `reportar` y `perro`, añadidos más GIFs a algunos comandos.")
    .addField("4.3.0", "Añadidos los comandos `amor`, `ariesdice`, `ariesdicensfw` añadidos más GIFs y arreglados un par de bugs.")
    .addField("4.3.1", "Quitados los comandos `ban` y `kick` por problemas.")
    .addField("4.4.0", "Añadidos los comandos `ppt`, `spoiler` y `codigo`. Cambiado el link del comando `soporte`.")
    .addField('4.4.1', "Se han realizado correciones ortográficas a todos los comandos.")
    .addField('4.4.2', 'Se han realizado cambios menores en algunos comandos.')
    .addField('5.0.0', 'Añadido el comando `definirgenero`, `f`. A partir de ahora los GIFs NSFW distinguen según tu género si lo has definido.')
    .setTimestamp()
  
    message.author.send(embed).catch(()=>{ message.channel.send( "Activa los MD (mensajes directos), porfavor");return})
     message.react("📩")
                                      
}

module.exports.help = {
    name: "hversion"
  }