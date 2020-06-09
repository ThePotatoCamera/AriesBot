exports.run = (client, message, args) => {
	const Discord = require('discord.js');

    if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237> `)
	if (message.guild) {
        const images = ["https://i.ibb.co/BjQhK4S/Pwank-265.gif","https://i.ibb.co/VJjKXtn/classic185.gif","https://i.ibb.co/PFRFMTb/boobs118.gif","https://i.ibb.co/F6ZLnhq/classic-173.gif","https://i.ibb.co/KGMNYz2/classic-203.gif","https://i.ibb.co/bQc3DCK/classic-490.gif","https://i.ibb.co/QfnJJ4g/classic026.gif","https://i.ibb.co/fdnhYTC/Cum-071.gif","https://i.ibb.co/dg8psDc/Random-hentai-gif-NB0051.gif","https://i.ibb.co/rQLFPx9/Random-hentai-gif-NB-0559.gif","https://i.ibb.co/nnwFrrC/Anal-052.gif","https://i.ibb.co/nnwFrrC/Anal-052.gif","https://i.ibb.co/KLvWT8j/Anal-063.gif","https://i.ibb.co/2NhQkcP/Anal-094-1.gif","https://i.ibb.co/sv6h9zb/Anal-079.gif","https://i.ibb.co/QbBnNHx/Anal-109.gif","https://i.ibb.co/FxgZHF6/anal15.gif","https://i.ibb.co/027J5Vq/Anal-113.gif","https://i.ibb.co/RDNxH23/anal30.gif","https://i.ibb.co/4gNQHVD/classic-039.gif","https://i.ibb.co/xmKwzB4/classic-002.gif","https://i.ibb.co/RhJvhby/classic-072.gif","https://i.ibb.co/Zgwh3ZN/classic-232.gif","https://i.ibb.co/P41v2gq/classic-294.gif","https://i.ibb.co/BBT1XTB/classic-314.gif","https://i.ibb.co/8DNsvTk/classic-517.gif","https://i.ibb.co/zGWCKJW/classic-552.gif","https://i.ibb.co/59r6yDr/classic041.gif","https://i.ibb.co/W6JBd0t/Random-hentai-gif-NB-0154.gif","https://i.ibb.co/tmvXdtd/Random-hentai-gif-NB-0936.gif","https://i.ibb.co/LNMB02s/x8v4qBh.gif","https://i.ibb.co/MDNnqXm/Random-hentai-gif-NB0047-1.gif","https://i.ibb.co/pwJjgRQ/Random-hentai-gif-NB0021.gif","https://i.ibb.co/85Z8yrz/Random-hentai-gif-NB-1025.gif","https://i.ibb.co/vVsNVSy/Random-hentai-gif-NB-0502.gif","https://i.ibb.co/NyCTZ4T/Random-hentai-gif-NB-0017.gif","https://i.ibb.co/71nRSxm/gspx-yareruko-densha-ecchi-sexo-en-el-tren-02.gif","https://i.ibb.co/VVFSXzX/gspx-parece-que-no-pero-creo-que-le-sobra-el-tanga.gif","https://i.ibb.co/4SmrFVR/classic037.gif","https://i.ibb.co/swLfdv4/classic-393.gif","https://i.ibb.co/GvsxYxX/classic-209.gif","https://i.ibb.co/nPpvDhW/125.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			message.channel.send("Porfavor menciona a alguien que no seas tu")
		}
		else if (args < 1) {
			message.channel.send("Porfavor menciona a alguien");
		}
		else {
			let user = message.mentions.members.first()
			if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} y ${mention} están follando.`)
				.setImage(randomItem(images));

			message.channel.send(embed);
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "follar"
  }