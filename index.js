require('dotenv').config();
const botconfig = require("./botconfig.json");
const { Client, Intents } = require("discord.js");
const config = require("./botconfig.json");
const token = process.env.TOKEN;
const Sequelize = require('sequelize');
const prefix = 'd!';

// Intents solicitados al Gateway
const intents = new Intents();
intents.add('GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS');

// Crear el cliente y la colección de comandos
const bot = new Client({disableEveryone: true}, {ws: { intents: intents}});

// Configuracion de la DB (Nota: pasar a SQLite para testeo.)
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // Config exclusiva SQLite
  storage: 'database.sqlite'
});

/* const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
    rejectUnauthorized: false
    },
  },
  logging: false,
}); */

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

const tablaF = sequelize.define('respects', {
  contadorF: Sequelize.INTEGER
});

/* const tablaPrefixes = sequelize.define('prefixes', {
  IDservidor: {
    type: Sequelize.STRING,
    unique: true,
  },
  prefix: {
    type: Sequelize.STRING,
    defaultValue: 'd!'
  }

}) */

// Sincronizar las tablas

tablaGeneros.sync();
tablaF.sync();
// tablaPrefixes.sync();

// Carga de prefix y de comandos y eventos

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
    if (f.endsWith('.js')) {
    console.log(`${f} cargado.`);
    }
    else console.warn(`! Se ha ignorado el archivo ${f}`);
  });

});
bot.on("ready", async () => {
  console.log(`${bot.user.username} está en linea, dando servicio a ${bot.guilds.cache.size} servidores.`);
  bot.user.setActivity(`Versión: ${botconfig.longVersion}`, {type: "WATCHING"});


});

// AFK

afk = new Map();

bot.on("message", async message => {

      if(!message.content.startsWith(prefix)) return;
      if (message.author.bot == true || message.author.system == true) return;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot,message,args);
      if(message.isMentioned(bot.user) == args[0]) return;

})

// Exports de tablas

exports.tablaGeneros = tablaGeneros;
exports.tablaF = tablaF;
// exports.tablaPrefixes = tablaPrefixes;

// Login

bot.login(token);

// Funciones adicionales

/* async function setPrefix() {
  try {
    const registro = await tablaPrefixes.findOne({
      where: {
        IDservidor: message.guild.id
      }
    });
    if (!registro) {
      return prefix = 'd!'
    }
    else {
    return prefix = registro.get('prefix');
    }
  }
  catch (e) {
    return console.error('Error al cargar el prefix de la base de datos: ' + e);
  }
} */