const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {    
    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('porfavor menciona a 2 personas');
    const random = Math.floor(Math.random() * 101);

    let heard = "";
 
    if(random < 50){
        heard='La tension se corta con un chchillo';

    }else if(random < 30){
        heard=':scream: Cuidado que vuelvan cuchillos :scream:';

    }else if(random < 80){
        heard='El amor se empieza a manifestar';
        
    }else if(random < 101){
        heard='El amor flota en el amienté!';

    }

    let heard2 = "";
 
    if(random < 30){
        heard=':broken_heart: ';

    }else if(random < 50){
        heard=':yellow_heart:';

    }else if(random < 80){
        heard=':cupid: ';
        
    }else if(random < 105){
        heard=':sparkling_heart: ';

    }

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .setDescription(`*La compatibilidad de* **${users}**`)
    .addField(`**Es del:**`,`** ${random}% **`)
    .addField(`*Corazon:* ${heard2}`,heard)
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "amor",
      }  