module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const api = require("imageapi.js")

  const reddit = ["MAAU","SpanishMeme","MemesEnEspanol","orslokx","dylanteroyt"]
  const imagenreddit = reddit[Math.floor(Math.random()*(reddit.length))]
  const img = await api(imagenreddit).catch(e => {
    console.error('[ERROR API REDDIT]' + e)
    return message.channel.send('Ha ocurrido un error al pedir un meme a reddit, reintentalo.')
  })

  const embed = new Discord.MessageEmbed()
              .setTitle(`Meme sacado de r/${imagenreddit}`)
              .setURL(`https://reddit.com/r/${imagenreddit}`)
              .setColor(0xefb810)
              .setImage(img)
  message.channel.send({ embed })
}

module.exports.help = {
  name: "memes"
}