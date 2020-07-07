exports.run = async (bot) => {

    const config = require('../botconfig.json');
    require('dotenv').config();

    bot.user.setPresence({
        activity: {
            name: `Ayuda: ${process.env.PREFIX}ayuda`,
            type: 'PLAYING',
        },
        status: 'online',
    });

    console.log('[BOOT] Se ha configurado la presencia del bot.');

    delete require.cache[require.resolve('../commands/recargar.js')];
    console.log('[BOOT] Se ha recargado el comando de reiniciar.');
    console.log(`[INFO] Bot cargado con éxito, ejecutando versión ${config.longVersion}. Sirviendo a ${bot.guilds.cache.size} servidores.`);
    console.log(`[INFO] Prefix predeterminado: ${process.env.PREFIX}`);
};