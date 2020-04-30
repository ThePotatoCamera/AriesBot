module.exports.run = async (bot, message, args) => {

    const Discord = require('discord.js');
    const tablas = require('../index.js');
    contar()

    async function contar() {
        try {
        const contador = await tablas.tablaF.findOne({
            where: {
                id: 1
            }
        });
        if (contador) {
            contador.increment('contadorF');
            tablas.tablaF.sync();
            const embed = new Discord.RichEmbed()
            .setColor(0xaa0000)
            .setTitle('F en el chat')
            .setDescription(`${message.author} ha pagado sus respetos.`)
            .setFooter(`Total de respetos: ${contador.get('contadorF')}`);
        
            return message.channel.send({embed});;
        }
        else {
            const contador = await tablas.tablaF.create ({
                contadorF: 1,
            });
            contador.increment('contadorF')
            tablas.tablaF.sync();
            const embed = new Discord.RichEmbed()
            .setColor(0xaa0000)
            .setTitle('F en el chat')
            .setDescription(`${message.author} ha pagado sus respetos.`)
            .setFooter(`Total de respetos: ${contador.get('contadorF')}`);
        
            return message.channel.send({embed});
        }
    }
    catch (e) {
        console.error('ERROR EN LA BASE DE DATOS:' + e)
    }
};
}

module.exports.help = {
    name: 'f'
}