const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado")
 
    if (message.guild) {
        {
            const images = ["https://i.imgur.com/tB7JOXM.png","https://i.imgur.com/SKYPVuS.png"];
            const embed = new Discord.MessageEmbed()
                .setColor(0xefb810)
                .setDescription(`${message.author} ha sacado:`)
                .setImage(randomItem(images))
                .setFooter("Mensaje enviado")
                .setTimestamp()
   
            message.channel.send({ embed }); 
            function randomItem(images) {
               return images[Math.floor(Math.random() * images.length)]
            
            function randomItem(items) {
               return items[Math.floor(Math.random() * items.length)];
           }   
       }
        }
       }
      
}

module.exports.help = {
    name: "moneda"
  }