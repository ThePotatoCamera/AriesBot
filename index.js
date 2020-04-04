require('dotenv').config();
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const config = require("./botconfig.json");
const token = process.env.TOKEN;
const Sequelize = require('sequelize');

// Configuracion de la DB
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // Config exclusiva SQLite
  storage: 'database.sqlite'
});

// Definición de tablas de la DB
const tablaGeneros = sequelize.define('generos', {
  IDusuario: {
      type: Sequelize.STRING,
      unique: true,
  },
  genero: {
      type: Sequelize.INTEGER,
      defaultValue: null,
  },
  descripcionGenero: Sequelize.STRING,
});

tablaGeneros.sync();

// Carga de prefix y de comandos y eventos

let prefix = config.prefix;
const fs = require(`fs`);

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No se ha podido encontrar comandos.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} cargado.`);
    bot.commands.set(props.help.name, props);
  });

});
bot.on("ready", async () => {
  console.log(`${bot.user.username} está en linea, dando servicio a ${bot.guilds.size} servidores.`);
  bot.user.setActivity(`Version: ${botconfig.longVersion}`, {type: "WATCHING"});


});

// AFK

bot.afk = new Map();
bot.on("message", async message => {

  if(message.guild === null) return;

  if (message.content.includes(message.mentions.users.first())) {
    let mentioned = bot.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`**${mentioned.usertag}** Esta afk por: ** ${mentioned.reason}**`)
  }

  let afkcheck = bot.afk.get(message.author.id);
  if (afkcheck) return [bot.afk.delete(message.author.id) ,message.reply('Ya no esta afk!')]

      const botconfig = require("./botconfig.json");
      if(!message.content.startsWith(prefix))return;
      if (message.author.bot == true) return;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot,message,args);
      if(message.isMentioned(bot.user) == args[0]) return;

})

// Exports de tablas
exports.tablaGeneros = tablaGeneros;

// Login

bot.login(token);