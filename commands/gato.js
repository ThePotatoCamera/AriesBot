exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://i.ibb.co/KWc7MJP/IMG-20180916-WA0070.jpg","https://i.ibb.co/19LkbXD/desconocido-2.jpg","https://i.ibb.co/SNnH0Dt/desconocido-1.jpg","https://i.ibb.co/GQQtY4y/desconocido-3.jpg","https://i.ibb.co/wr0CyFt/desconocido-6.jpg","https://i.ibb.co/qs3sfp6/desconocido-7.jpg","https://i.ibb.co/2nvT3D9/desconocido-8.jpg","https://i.ibb.co/HKx2gb2/desconocido.jpg","https://i.ibb.co/Hh0YnHf/desconocido.jpg","https://i.ibb.co/kQGMYGJ/desconocido-3.jpg","https://i.ibb.co/gj9jmn8/desconocido-2.jpg","https://i.ibb.co/qn0N3FB/20191011-202606.jpg","https://i.ibb.co/kydv4sn/desconocido-3.jpg","https://i.ibb.co/wc54b17/desconocido-2.jpg","http://giphygifs.s3.amazonaws.com/media/pdQKRy5cFTMDS/giphy.gif","http://giphygifs.s3.amazonaws.com/media/5lzfgsoB6PeQ8/giphy.gif","http://giphygifs.s3.amazonaws.com/media/nw7LEKKpkgVNu/giphy.gif","https://media.giphy.com/media/KZhDa4fa0IK7ft7C9F/giphy.gif","https://media.giphy.com/media/xTDkSGXmXmAnB5fEBg/giphy.gif","http://giphygifs.s3.amazonaws.com/media/Maz1hoeGskARW/giphy.gif","http://giphygifs.s3.amazonaws.com/media/eDgmbiQcujjsA/giphy.gif","https://media.giphy.com/media/3Ev8JMnsNqUM/giphy.gif","http://giphygifs.s3.amazonaws.com/media/6VoDJzfRjJNbG/giphy.gif","https://media1.tenor.com/images/30bae544de9864cd098fdada34d90be4/tenor.gif?itemid=13963567","https://media1.tenor.com/images/3d13793f700c69af598df8e388c85cfe/tenor.gif?itemid=9643347","https://media1.tenor.com/images/5738658e35fa01ace094ce17ec2f4f9d/tenor.gif?itemid=9934420","https://media1.tenor.com/images/f2e3b8fc4d5428078d822fcf286ec4ff/tenor.gif?itemid=4004207","https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif?itemid=6198981","https://media1.tenor.com/images/2a9269f0473b5cc5a25caddf16ea618e/tenor.gif?itemid=4849043","https://media1.tenor.com/images/5998dc6b4576b29ba1d61a084f3d79d0/tenor.gif?itemid=5772115","https://i.ibb.co/x8wb3X0/Gif-aries2.gif","https://i.ibb.co/f8hSVFQ/Gif-aries1.gif"];
        const embed = new Discord.RichEmbed()
        .setColor(0xefb810)
        .setDescription(`${message.author} ha pedido un gato.`)
        .setImage(randomItem(images));

    message.channel.send({ embed });
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "gato"
  }
