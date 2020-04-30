module.exports.run = async (bot, message, args) => {

    const tablas = require('../index.js');
    const numeroGenero = setGenero(args[0]);
    const descripcionGenero = describirGenero(numeroGenero);

    /* if (!args) {
        return message.channel.send('Debes especificar un genero (chico o chica).')
    } 
    Despreciado, se tomará como que no quiere un genero y se hace reset.
    */

    try {
        const registro = await tablas.tablaGeneros.create ({
            IDusuario: message.author.id,
            genero: numeroGenero,
            descripcionGenero: descripcionGenero,
        });
        tablas.tablaGeneros.sync();
        return message.channel.send(`Se ha definido el genero de ${message.author} a **${registro.descripcionGenero}**.`);
    }
    catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            const registroAfectado = await tablas.tablaGeneros.update({ genero: numeroGenero, descripcionGenero: descripcionGenero}, { where: {IDusuario: message.author.id } });
            if (registroAfectado > 0) {
                const nuevoGenero = await tablas.tablaGeneros.findOne({
                    where: {
                        IDusuario: message.author.id
                    }
                })
                tablas.tablaGeneros.sync();
                return message.channel.send(`Se ha definido el género de ${message.author} a **${nuevoGenero.get('descripcionGenero')}**.`);
            };
        };
    };

    function setGenero(genero) {
    switch(genero) {
            case 'hombre': 
                return genero = 1;
            case 'mujer':
                return genero = 2;
            case 'chico':
                return genero = 1;
            case 'chica':
                return genero = 2;
            case 'chicos':
                return genero = 1;
            case 'chicas':
                return genero = 2;
            case 'hombres': 
                return genero = 1;
            case 'mujeres':
                return genero = 2;
            default:
                return genero = 0;
        };
    };

    function describirGenero(dGenero) {
        switch(dGenero) {
            case 0:
                return 'No definido';
            case 1:
                return 'Hombre';
            case 2:
                return 'Mujer';
        }
    }
};

module.exports.help = {
    name: 'definirgenero'
}