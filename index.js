require('dotenv').config();
const { Client, Intents } = require("discord.js");
const token = process.env.TOKEN;
const Sequelize = require('sequelize');

// Intents solicitados al Gateway
const intents = new Intents();
intents.add('GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS');

// Crear el cliente y la colección de comandos
const bot = new Client({disableEveryone: true}, {ws: { intents: intents}});

// Configuracion de la DB (Comentar los dialectOptions en testeo, eso o configura tu SSL)

const sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        // ssl: {
        // rejectUnauthorized: false
        // },
      },
      logging: false,
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

const tablaF = sequelize.define('respects', {
  contadorF: Sequelize.INTEGER
});

// Sincronizar las tablas

tablaGeneros.sync();
tablaF.sync();

// Servicio de comandos

const fs = require(`fs`);

bot.commands = new Map();

fs.readdir('./commands', (err, files) => {
	if (err) return console.error('[FS ERROR] ' + err);
	files.forEach(file => {
		if (file.endsWith('.ignore')) {
			const disabledName = file.split('.')[0];
			console.warn(`[!CMDS!] El comando ${disabledName} se encuentra deshabilitado.`);
		}
		else if (!file.endsWith('.js')) return
		else if (file.endsWith('js')) {
		const props = require(`./commands/${file}`);
		const commandName = file.split('.')[0];
		bot.commands.set(commandName, props);
		console.info(`[CMDS] Cargado el comando ${commandName}.`);
		};
	});
});

// Servicio de eventos

fs.readdir('./events', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const eventFunction = require(`./events/${file}`);
		const eventName = file.split('.')[0];
		bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
	});
});
console.info('[BOOT] Se ha iniciado el servicio de eventos.');

// Cerar mapa de AFKs

afk = new Map();

// Exports de tablas

exports.tablaGeneros = tablaGeneros;
exports.tablaF = tablaF;

// Login

bot.login(token);
