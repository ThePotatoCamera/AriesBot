const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado")
 
    if (message.guild) {
        {
            const images = ["https://i.ibb.co/CHjQ6Y8/20190416-171429.png","https://i.ibb.co/y54hSzn/20190416-163648.png"];
            const embed = new Discord.RichEmbed()
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