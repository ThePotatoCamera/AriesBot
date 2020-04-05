const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {    
    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('Por favor, menciona a 2 personas.');
    const random = Math.floor(Math.random() * 101);

    let hearth = random;
 
    if(hearth < 50){
        
        hearth='La tensión se corta con un cuchillo...';

    }else if(hearth < 30){
        hearth=':scream: Cuidado que vuelan cuchillos :scream:';

    }else if(hearth < 80){
        hearth='El amor se empieza a manifestar.';
        
    }else if(hearth < 101){
        hearth='¡El amor flota en el ambiente!';

    }

    let hearth2 = random;
 
    if(hearth2 < 30){
        hearth2=':broken_heart: ';

    }else if(hearth < 50){
        hearth2=':yellow_heart:';

    }else if(hearth2 < 80){
        hearth2=':cupid: ';
        
    }else if(hearth2 < 105){
        hearth2=':sparkling_heart: ';

    }

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .setDescription(`*La compatibilidad de* **${users}**`)
    .addField(`**Es del:**`,`** ${random}% **`)
    .addField(`${hearth2}`, `*${hearth}*`)
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "amor",
      }  