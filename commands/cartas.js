const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.name == undefined) return message.channel.send("No puedes ejecutar este comando en un canal privado.")
 
    if (message.guild) {
        {
            const images = ["https://i.ibb.co/64sQDBm/Photo-Grid-1556127249386.jpg", "https://i.ibb.co/vL9PBqM/Photo-Grid-1555617543254.jpg","https://i.ibb.co/DYTQ9xY/Photo-Grid-1555615124019.jpg","https://i.ibb.co/TqjYwMf/Photo-Grid-1555614914103.jpg","https://i.ibb.co/C0hsqCh/Photo-Grid-1555614771591.jpg","https://i.ibb.co/BPcsyXz/Photo-Grid-1555614438905.jpg","https://i.ibb.co/M57NWTL/Photo-Grid-1555439489124.jpg","https://i.ibb.co/wWGtyvL/Photo-Grid-1555437299273.jpg","https://i.ibb.co/SvCvLsm/IMG-20190424-195451.jpg","https://i.ibb.co/C6sCpc9/IMG-20190424-194435.jpg","https://i.ibb.co/DKHr9X8/IMG-20190416-192611.jpg"];
            const embed = new Discord.RichEmbed()
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