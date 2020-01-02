const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {

  if(message.channel.name == undefined) return message.channel.send("No puedes usar este comando en un canal privado")
    new Discord.Permissions(4);
    var server = message.guild;
    const user = message.mentions.users.first();
    const reason = args[1]
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        let permiso = message.member.hasPermission("BAN_MEMBERS");
      if(!permiso){
        message.channel.send("Lo siento pero no dispones de este permiso");
       } else

       if (!reason) return message.channel.send("Porfavor pon una razon")
       user.send(`Has sido baneado del servidor ${server.name} por: **${reason}**`)
        member.ban('Optional reason that will display in the audit logs').then(() => {
          message.reply(`${user.tag} a sido banead@ del servidor `)
        }).catch(err => {
          message.reply('Usuari@ inmune a ban');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('Perdona,debes mencionar a quien banear');
    }

}
    module.exports.help = {
        name: "ban"
      }