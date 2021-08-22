module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const api = require("imageapi.js")

  //let reddit = ["AnimeFunny","memes","dankmemes","animemes","SpanishMeme","MemesEnEspanol"]
  let reddit = ["sex_comics"] //puesto solo para ver que pasaria si se encuentra con cosas NSFW, quitar para el normal
  let imagenreddit = reddit[Math.floor(Math.random()*(reddit.length))]
  let img = await api(imagenreddit)

  const embed = new Discord.MessageEmbed()
              .setTitle(`Meme sacado de r/${imagenreddit}`)
              .setURL(`https://reddit.com/r/${imagenreddit}`)
              .setColor(0xefb810)
              .setImage(img)
          message.channel.send({ embed }).catch(err => {
              if (err == "Image was marked as NSFW") {
                console.log("Error NSFW memes")
              }
              else {
              console.error(err)
              }
            })
}

module.exports.help = {
  name: "memes"
}