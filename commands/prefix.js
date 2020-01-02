const Discord = require('discord.js');
const fs = require("fs");
const botconfig = require("../botconfig.json");
exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("No tienes permisos para hacer esto");
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;


if(!args[0]) return message.reply(`Usa: ${prefix}prefix <Prefix que quieres poner>`);
if(args[0] == "ayuda") return message.reply(`Usa: ${prefix}prefix <Prefix que quieres poner>`);
if(args[0] == "help") return message.reply(`Usa: ${prefix}prefix <Prefix que quieres poner>`);

prefixes[message.guild.id] = {
    prefixes: args[0]
}

fs.writeFile("./prefixes.json", JSON.stringify(prefixes),(err) => {
    if (err) console.log(err)
});

let sEmbed = new Discord.RichEmbed()
.setColor(0xefb810)
.setTitle("Prefijo puesto!")
.setDescription(`Prefijo cambiado a: ${args[0]}`)

message.channel.send(sEmbed);

}
module.exports.help = {
    name: "prefix"
}