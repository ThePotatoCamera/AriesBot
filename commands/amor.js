const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {    
    const mention = message.mentions.users.first()
    if(!mention) return message.channel.send('Por favor, menciona a alguien.');
    if(message.author == mention) {
        random = 200;
    }
    else {
        random = Math.floor(Math.random() * 100);
    }
    
    let hearth = random;
 
    if (hearth < 20) {
        hearth=':scream: ¡Cuidado que vuelan cuchillos! :scream:';

    }
    else if (hearth < 50) {
        hearth = 'Hay cierta tensión en el ambiente...'
    }
    else if (hearth == 100) {
        hearth = '¡Es amor verdadero!'
    }
    else if (hearth == 200) {
        hearth = `${message.author} se ama demasiado a si mismo.`
    }
    else if (hearth > 90) {
        hearth='¡El amor flota en el ambiente!';

    }
    else if (hearth >= 75) {
        hearth='El amor se empieza a manifestar.';
        
    }
    else if (hearth >= 50) {
        
        hearth='Aquí solo hay amistad, despejen.';

    }

    let hearth2 = "";
 
    if (random < 20) {
        hearth2 = ':knife:'
    }
    else if(random < 50) {
        hearth2=':broken_heart: ';

    }
    else if (random == 100) {
        hearth2=':couplekiss:'
    }
    else if (random == 200) {
        hearth2 = ':princess:'
    }
    else if(random >= 90) {
        hearth2=':sparkling_heart: ';
    }
    else if(random >= 75) {
        hearth2=':cupid: ';   
    }
    else if(random >= 50) {
        hearth2=':yellow_heart:';
    } 


    let ballembed = new Discord.MessageEmbed()
    .setColor("#efb810")
    .setDescription(`La compatibilidad de **${message.author.username}** con **${mention.username}**`)
    .addField(`**Es del**`,`** ${random}% **`)
    .addField(`*Corazón:*   ${hearth2}`, `**${hearth}**`)
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "amor",
      }  