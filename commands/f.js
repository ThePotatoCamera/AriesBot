module.exports.run = async (bot, message, args) => {

    const Discord = require('discord.js');
    const tablas = require('../index.js');
    const recuento = contar();

    const embed = new Discord.RichEmbed()
        .setColor(0xaa0000)
        .setTitle('F en el chat')
        .setDescription(`${message.author} ha pagado sus respetos.`)
        .setFooter(`Total de respetos: ${recuento}`);
    
        message.channel.send({embed});

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
            return contador.contadorF;
        }
        else {
            return message.channel.send('Error desconocido.')
        }
        }
    catch (e) {
        const contador = await tablas.tablaF.create ({
            contadorF: 0,
        });
        contador.increment('contadorF')
        tablas.tablaF.sync();
        return contador.contadorF;
    }
        
    };
}

module.exports.help = {
    name: 'f'
}