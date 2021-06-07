module.exports.run = async (bot, message, args) => {

    if (!message.guild) return message.channel.send('No puedes ejecutar este comando en un canal privado.');

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
            const cantidadF = contador.get('contadorF');
            contador.increment('contadorF');
            tablas.tablaF.sync();
						cantidadF = contador.get('contadorF');
            const embed = new Discord.MessageEmbed()
            .setColor(0xaa0000)
            .setTitle('F en el chat')
            .setDescription(`${message.author} ha pagado sus respetos.`)
            .setFooter(`Total de respetos: ${cantidadF}`);
            return message.channel.send({embed});;
        }
        else {
            const contador = await tablas.tablaF.create ({
                contadorF: 1,
            });
            tablas.tablaF.sync();
						cantidadF = contador.get('contadorF');
            const embed = new Discord.MessageEmbed()
            .setColor(0xaa0000)
            .setTitle('F en el chat')
            .setDescription(`${message.author} ha pagado sus respetos.`)
            .setFooter(`Total de respetos: ${contador}`);
        
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