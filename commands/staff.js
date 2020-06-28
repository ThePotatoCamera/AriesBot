const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 const embed = new Discord.MessageEmbed() 
.setTitle("Aries es posible a estas personas:")
.setColor(0x00AE86)
.addField("PokeToribio","Dev <:Verificado:681246902636904450>") 
.addField("MarisaTheKiller","Diseñadora y ayudante <:Verificado:681246902636904450>")  
.addField("ThePotatoCamera", "Dev <:Verificado:681246902636904450>") 
.setTimestamp()

message.channel.send({embed});  
}

module.exports.help = {
    name: "staff"
  }