exports.run = (client, message, args) => {
    const Discord = require('discord.js');
        
    let replies = ['piedra', 'papel', 'tijeras'];
    let result = Math.floor((Math.random() * replies.length));

    let uReply = args[0];
    if (!uReply) return message.channel.send(`Por favor ${message.author}, juega con una de estas opciones: \`${replies.join(', ')}\``);
    if (!replies.includes(uReply)) return message.channel.send(`${message.author}, solo se puede jugar con: \`${replies.join(', ')}\``);

    if (replies[result] === uReply) {
        return message.channel.send(`¡Es un empate! (**${args[0]}**).`);
    } else if (uReply === 'piedra') {
        if (replies[result] === 'papel') return message.channel.send(`¡Yo gano! He escogido: **${replies[result]}**`);
        else return message.channel.send(`¡Tú ganas! He escogido: **${replies[result]}**`);;
    } else if (uReply === 'tijeras') {
        if (replies[result] === 'piedra') return message.channel.send(`¡Yo gano! He escogido: **${replies[result]}**`);
        else return message.channel.send(`¡Tú ganas! He escogido: **${replies[result]}**`);
    } else if (uReply === 'papel') {
        if (replies[result] === 'tijeras') return message.channel.send(`¡Yo gano! He escogido: **${replies[result]}**`);
        else return message.channel.send(`¡Tú ganas! He escogido: **${replies[result]}**`);
    }

};
module.exports.help = {
    name: "ppt"
  }
