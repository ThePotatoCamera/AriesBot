const discord = require('discord.js');
const button = require('discord-buttons');
module.exports.run = async (client,message,args,) => {
        
            const embed = new discord.MessageEmbed()
            .setColor("red")
            .setDescription("Son botones!")

            //primer boton
            let button1 = new button.MessageButton()
            .setLabel("Un boton")
            .setStyle("green")
            .setID(`button1`)

            //segundo boton
            let button2 = new button.MessageButton()
            .setLabel("Otro boton")
            .setStyle("red")
            .setID(`button2`)

            let row1 = new button.MessageActionRow()
            .addComponent(button1)
            .addComponent(button2)

            return message.channel.send({
                embed: embed,
                components: [row1]
            })
        }
module.exports.help = {
    name: 'test'
}