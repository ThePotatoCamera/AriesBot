exports.run = (bot, message) => {
	const config = require('../botconfig.json');

	if (message.author.bot) return;

	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

	if (!cmd) return;

	cmd.run(bot, message, args);
};
