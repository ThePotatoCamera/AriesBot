require('dotenv').config();
const { Client, Intents } = require("discord.js");
const config = require("./botconfig.json");
const token = process.env.TOKEN;
const Sequelize = require('sequelize');

// Intents solicitados al Gateway
const intents = new Intents();
intents.add('GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS');

// Crear el cliente y la colección de comandos
const bot = new Client({disableEveryone: true}, {ws: { intents: intents}});


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

// Login

bot.login("NzY4ODYwNzQyODQxMjcwMzEz.X5GnXQ.A9Ngq3qwMobU0jDMXiNOGSjyb_Y");
