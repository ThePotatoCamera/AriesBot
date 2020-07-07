exports.run = (bot, message) => {
	require('dotenv').config();

	if (message.author.bot) return;

	if (message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

	if (!cmd) return;

	cmd.run(bot, message, args);
};
