const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 const embed = new Discord.RichEmbed() 
.setTitle("Este es el staff del bot:")
.setColor(0x00AE86)
.addField("PokeToribio:","Dev") 
.addField("MarisaTheKiller:","Diseñadora y ayudante")  
.addField("ThePotatoCamera", "Dev y gran profesor xD") 
.setFooter("Mensaje enviado")
.setTimestamp()

message.channel.send({embed});  
}

module.exports.help = {
    name: "staff"
  }