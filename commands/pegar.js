exports.run = (client, message, args) => {
	const Discord = require('discord.js');

	if (message.guild) {
        const images = ["https://media.giphy.com/media/3orif1FICBYgRwNWCc/giphy.gif","https://media.giphy.com/media/3orifakbMAdNz9T9M4/giphy.gif","https://media.giphy.com/media/3orif1s00tnDb3PWeY/giphy.gif","https://media.giphy.com/media/3orif0tEDNKBLGD7l6/giphy.gif","https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956","https://media1.tenor.com/images/fd14f63a93796ed26bd385c015df57b8/tenor.gif?itemid=4665506","https://media1.tenor.com/images/a0ff9e6e3f65b921d63dfffeec0b94a0/tenor.gif?itemid=7202047","https://media1.tenor.com/images/8b7788813720b2db4a28c64458f3bd81/tenor.gif?itemid=12295775","https://media1.tenor.com/images/ba4b7240bfe12a4491ec4a299754e9e2/tenor.gif?itemid=8607940","https://media1.tenor.com/images/dd21cc59a6daa2f1b7445c3c20d328d4/tenor.gif?itemid=4703404","https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028","https://media1.tenor.com/images/40c3d3bd49d229d63233f4eeba77e51f/tenor.gif?itemid=7962727","https://media1.tenor.com/images/a962b12d950b4716fee935368dbde476/tenor.gif?itemid=7738138","https://media1.tenor.com/images/db906ba1e54ce3067c20e88656dbe970/tenor.gif?itemid=13857116","https://media1.tenor.com/images/35958135e2d670fde0e66bec255b8904/tenor.gif?itemid=8476171","https://pa1.narvii.com/6306/1b59764db231cabda1772076531851d1ec733ee1_hq.gif","https://media1.tenor.com/images/e024cd7b108d40623515e747be2d9036/tenor.gif?itemid=7961753","https://media1.tenor.com/images/c05f87fd707f3d59c26a24bed134c341/tenor.gif?itemid=4754245","https://media1.tenor.com/images/da9a939e54749af1c6bd54ab558c5068/tenor.gif?itemid=13319981","https://media1.tenor.com/images/27d8023498836854a5e0474c4c597353/tenor.gif?itemid=9610130","https://media1.tenor.com/images/61e9e49daac51f0903f724570dceeff8/tenor.gif?itemid=11797828","https://media.tenor.com/images/0b46289a115af933a7d941c68a7a2154/tenor.gif","https://media1.tenor.com/images/33303770a4bbbdc6f8dd055ac5277a09/tenor.gif?itemid=10714064","https://media1.tenor.com/images/f306ddca13c80c3761823a831732bf5c/tenor.gif?itemid=9718119","https://media1.tenor.com/images/e518e1642765663fb0dea2efe25f18a6/tenor.gif?itemid=11605870","https://media1.tenor.com/images/ba5d68987f19336714d570eea32ad4cd/tenor.gif?itemid=4939475","https://media1.tenor.com/images/c85bda6c565c7b03c7b35641ead0bfde/tenor.gif?itemid=9874931","https://media1.tenor.com/images/d5d410bb922ec3bdf7f5693b9c95476f/tenor.gif?itemid=9874934","https://media1.tenor.com/images/3a759a86c673577c7ed6925e077d85b1/tenor.gif?itemid=7392514","https://media1.tenor.com/images/3e8cea5bfe2c09a45266180e21e64a01/tenor.gif?itemid=7653885","https://media1.tenor.com/images/a20e4d7927472fa060e360b1a0dea053/tenor.gif?itemid=10004499","https://media1.tenor.com/images/2a43345b37034cc1aff300995f5786f2/tenor.gif?itemid=4614086","https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif","https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif?itemid=4436362","https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif","https://media.giphy.com/media/exaa8OED1vvq/giphy.gif","https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720","https://media.giphy.com/media/iUgoB9zOO0QkU/giphy.gif","https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif","https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif","https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif","https://media.tenor.com/images/c7dece5cdd4cee237e232e0c5d955042/tenor.gif","https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif"];
		const mention = message.mentions.members.first();
		if (message.author == args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} se esta pegando el solo`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else if (args < 1) {
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta pegando al aire.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
		else {
			let user = message.mentions.members.first()
      if (!user) return message.reply("porfavor menciona a alguien");
			const embed = new Discord.MessageEmbed()
				.setColor(0xefb810)
				.setDescription(`${message.author} esta pegando a ${mention}.`)
				.setImage(randomItem(images));

			message.channel.send({ embed });
		}
	}

	function randomItem(images) {
		return images[Math.floor(Math.random() * images.length)];
	}

};
module.exports.help = {
    name: "pegar"
  }