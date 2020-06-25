const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado.")
 
    if (message.guild) {
        {
            const images = ["https://i.imgur.com/TuV5wSO.jpg", "https://i.imgur.com/nq7LiZi.jpg","https://i.imgur.com/j4E2WF3.jpg","https://i.imgur.com/LcjzGwy.jpg","https://i.imgur.com/w0NJFxF.jpg","https://i.imgur.com/ye6GrYh.jpg","https://i.imgur.com/9lPQyca.jpg","https://i.imgur.com/Go492WO.jpg","https://i.imgur.com/nrFvRzL.jpg","https://i.imgur.com/uHwcZmV.jpg","https://i.imgur.com/Gs3RD6x.jpg"];
            const embed = new Discord.MessageEmbed()
                .setColor(0xefb810)
                .setDescription(`${message.author} ha sacado la carta:`)
                .setImage(randomItem(images))
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
    name: "cartas"
  }