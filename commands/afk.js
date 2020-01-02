const Discord = require("discord.js");

	exports.run = (bot, message, args) => {
	let reason = args.join(' ') ? args.join(' ') : 'Estoy afk, Contestare cuando pueda.'
    let afklist = bot.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            usertag: message.author.tag,
            reason: reason
         };
     
         bot.afk.set(message.author.id, construct)
         return message.channel.send(`Te as puesto afk por: **${reason}**`)

        }
};
module.exports.help = {
    name: "afk"
  }
