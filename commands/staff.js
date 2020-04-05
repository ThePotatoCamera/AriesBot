const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 const embed = new Discord.RichEmbed() 
.setTitle("Aries es posible gracias a estas personas:")
.setColor(0x00AE86)
.addField("PokeToribio:","Dev") 
.addField("MarisaTheKiller:","Diseñadora y ayudante")  
.addField("ThePotatoCamera", "Dev")
.setTimestamp()

message.channel.send({embed});  
}

module.exports.help = {
    name: "staff"
  }