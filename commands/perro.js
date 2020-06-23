exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://i.ibb.co/CQ5WNBK/kero-i-zeus.jpg","https://i.ibb.co/pdbDtwX/kero.jpg","https://i.ibb.co/LZMP3gM/IMG-20190906-WA0035.jpg","https://i.ibb.co/64pHj9L/IMG-20180808-WA0002.jpg","https://i.ibb.co/ySM2twC/IMG-20190907-012825.jpg","https://i.ibb.co/BNdgKrB/256910-10201523664394333-1530291242-o.jpg","https://i.ibb.co/jbFfzsp/IMG-20191013-WA0005.jpg","https://i.ibb.co/47664jF/IMG-20191013-WA0004.jpg","https://i.ibb.co/9hRKpzt/IMG-20191013-WA0003.jpg","https://i.ibb.co/DKNrwht/IMG-20191013-WA0002.jpg","https://i.ibb.co/MR5chxy/IMG-20191013-WA0001.jpg","https://i.ibb.co/W0mVX9M/IMG-20191013-WA0000.jpg","https://i.ibb.co/FnCc49r/desconocido-24.jpg","https://i.ibb.co/hHLqZjc/desconocido-23.jpg","https://i.ibb.co/HFM76M8/desconocido-22.jpg","https://i.ibb.co/vmXBh09/desconocido-21.jpg","https://i.ibb.co/Lnq7g8j/desconocido-20.jpg","https://i.ibb.co/y08J9XS/desconocido-19.jpg","https://i.ibb.co/Lk6vTYX/desconocido-18.jpg","https://i.ibb.co/vYN0YMn/desconocido-17.jpg","https://i.ibb.co/jHHt0rX/desconocido-16.jpg","https://i.ibb.co/W2jRjp9/desconocido-15.jpg","https://i.ibb.co/9yXpt0H/desconocido-14.jpg","https://i.ibb.co/3cDwj1r/desconocido-13.jpg","https://i.ibb.co/NKShZNv/desconocido-12.jpg","https://i.ibb.co/G9Mkjs3/desconocido-11.jpg","https://i.ibb.co/VCZQ0vW/desconocido-10.jpg","https://i.ibb.co/g91rMts/desconocido-9.jpg","https://i.ibb.co/YcSYtyj/desconocido-8.jpg","https://i.ibb.co/sKDGMcK/desconocido-7.jpg","https://i.ibb.co/x12cgCz/desconocido-6.jpg","https://i.ibb.co/6wKdGd1/desconocido-5.jpg","https://i.ibb.co/JHZMjt6/desconocido-4.jpg","https://i.ibb.co/WpLYQNJ/desconocido-3.jpg","https://i.ibb.co/bJ9T33B/desconocido-2.jpg","https://i.ibb.co/hFVQ2gm/desconocido-1.jpg","https://i.ibb.co/J5kmT2N/desconocido.jpg","https://i.ibb.co/cJWGYcD/20191013-214430.jpg","https://i.ibb.co/BBkr97V/20191012-190016.jpg","https://i.ibb.co/PZT0srZ/20191012-180802.jpg","https://i.ibb.co/CzJVxgV/20191012-180743.jpg","https://i.ibb.co/3vTzVb8/20191012-175525.jpg","https://i.ibb.co/9HrbHf5/20191012-175145.jpg","https://i.ibb.co/zGPZG6g/20191012-175129.jpg","https://i.ibb.co/SyCY1vj/20191011-225619.jpg","https://i.ibb.co/gT4j3Bm/20191011-224927.jpg"];
        const embed = new Discord.MessageEmbed()
        .setColor(0xefb810)
        .setDescription(`${message.author} ha pedido un perro.`)
        .setImage(randomItem(images));

    message.channel.send({ embed });
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "perro"
  }
