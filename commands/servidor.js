exports.run = (bot, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        if (args[0] == 'clasico') classicMode = true;
        else classicMode = false;
		const verificationLevel = verificationLevelTranslator(message.guild.verificationLevel, classicMode);
		const region = regionFormatter(message.guild.region);
		const embed = new Discord.MessageEmbed()
			.setTitle(`Información sobre ${message.guild.name}`)
			.setColor(0x7289da)
			.setThumbnail(message.guild.iconURL)
			.addField('ID', message.guild.id, true)
			.addField('Dueño actual', message.guild.owner, true)
			.addField('Región', region, true)
			.addField('Fecha de creación', message.guild.createdAt, true)
			.addField('Usuarios en total', message.guild.memberCount, true)
			.addField('Nivel de verificación', verificationLevel, true);
		return message.channel.send({ embed });
	}
	else {return message.reply('El comando solo está disponible desde un servidor.');}

	function verificationLevelTranslator(p1, classicMode) {
		switch (p1) {
		case 'NONE':
			return 'Ninguno';
		case 'LOW':
			return 'Bajo';
		case 'MEDIUM':
			return 'Medio';
		case 'HIGH':
            if (classicMode == true) {
            return '(╯°□°）╯︵ ┻━┻';
            }
            else return 'Alto';
		case 'VERY_HIGH':
            if (classicMode == true) {
            return '┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻';
            }
            else return 'Muy alto';
        default:
            return p1;
		}
	}
	function regionFormatter(rf1) {
		switch (rf1) {
		case 'eu-west':
			return '🇪🇺 Europa Oeste';
		case 'eu-central':
            return '🇪🇺 Europa Centro';
        case 'europe':
            return '🇪🇺 Europa';
		case 'brazil':
			return '🇧🇷 Brasil';
		case 'us-west':
			return '🇺🇸 Estados Unidos Oeste';
		case 'us-south':
			return '🇺🇸 Estados Unidos Sur';
		case 'us-central':
			return '🇺🇸 Estados Unidos Centro';
		case 'us-east':
			return '🇺🇸 Estados Unidos Este';
		case 'russia':
			return '🇷🇺 Rusia';
		case 'singapore':
			return '🇸🇬 Singapur';
		case 'hongkong':
			return '🇭🇰 Hong Kong';
		case 'japan':
			return '🇯🇵 Japón';
		case 'sydney':
			return '🇦🇺 Australia';
		case 'southafrica':
            return '🇿🇦 Sudáfrica';
        case 'india':
            return '🇮🇳 India';
        default:
            return rf1;
		}
	}
};
