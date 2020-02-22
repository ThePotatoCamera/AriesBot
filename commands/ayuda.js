const Discord = require(`discord.js`);
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

        const categoria = `${args[0]}`.toLowerCase();
        switch (categoria) {
            case 'bot':
                categoriaBot();
                return;
            case 'social':
                categoriaSocial();
                return;
            case 'entretenimiento':
                categoriaEntretenimiento();
                return;
            case 'moderacion':
                categoriaModeracion();
                return;
            case 'nsfw':
               categoriaNsfw();
                return;
        
            case 'utiles':
               categoriaUtiles();
                return;

            case `animales`:
                categoriaAnimales();
                return;
            
            case 'staffbot':
               categoriastaffbot();
                return;    
          
            }
            const mainEmbed = new Discord.RichEmbed()
                .setTitle('Categorias de la ayuda')
                .setDescription(`Prefijo: d! *Sintaxis: <obligatorio> [opcional]*`)
                .setColor(0xefb810)
                .addBlankField()
                .addField('Bot', 'Comandos relacionados con el bot.')
                .addField('NSFW', 'Comandos NSFW. (+18)')
                .addField('Social', 'Comandos sociales.')
                .addField('Entretenimiento', 'Comandos de entretenimeinto.')
                .addField('Utiles', 'Comandos utiles')
                .addField("Animales","Comandos donde se envian gifs y fotos del animal que quieres")
                .addField('Moderacion','Comandos de moderacion')
                .addBlankField()
                .setFooter('Para ver los comandos de cada categoría,Pon el nombre de la categoria despues del comando')
                .setTimestamp();
            message.channel.send(mainEmbed)
            .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
        
            function categoriaBot() {
                const botEmbed = new Discord.RichEmbed()
                    .setTitle('Comandos de informacion sobre el bot')
                    .setColor(0xefb810)
                    .addField(`ayuda`,`Pone este mismo mensaje con la ayuda de todos los comandos. ***Sintaxis: d!ayuda [categoria]***`)
                    .addField(`presentacion`,`Te muestra un mensaje de presentación del bot. ***Sintaxis: d!presentacion***`)
                    .addField(`staff`,`Te muestra un mensaje diciendo el staff del bot. ***Sintaxis: d!staff***`)
                    .addField(`invitacion`,`Te manda un mensaje con el que podras invitarme a tu discord. ***Sintaxis: d!invitacion***`)
                    .addField(`hversion:`,`Envia un mensaje con el historial de versiones. ***Sintaxis: d!hversion***`)
                    .addField(`infobot:`,`Te muestra informacion del bot. ***Sintaxis: d!infobot***`)
                    .addField(`servidores:`,`Envia un mensaje con el numero de servidores en los que esta el bot. ***Sintexis: d!servidoress***`)
                    .addField(`votar:`,`Te envia un mensaje con el que podras votar a ariesbot en la pagina 'discordbots'.  ***Sintaxis: d!votar***`)
                    .addField(`soporte:`,`Te envia un mensaje con el que podras unirte al servidor de soporte de aires.   ***Sintaxis: d!soporte***`)
                    .addField(`mantenimientos`,`Envia un mensaje con el registro de mantenimientos de Aries`)
                    .addField(`reportar`,`Envia el reporte que agas al canal #reportes en el discord de soporte.   ***Sintaxis: d!reportar <reporte>***`)
                    .setTimestamp();
        
                message.channel.send(botEmbed)
                .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
            }
        
            function categoriaSocial() {
                const socialEmbed = new Discord.RichEmbed()
                    .setTitle('Comandos sociales')
                    .setColor(0xefb810)
                    .addField(`besar:`,`Besas a quién mencionas. ***Sintaxis: d!besar [@usuario]***`)
                    .addField(`matar:`,`Matas a quién mencionas. ***Sintaxis: d!matar [@usuario]***`)
                    .addField(`pegar:`,`Pegas a quién mencionas. ***Sintaxis: d!pegar [@usuario]***`)
                    .addField(`reir:`,`Te ries. ***Sintaxis: d!reir [@usuario]***`)
                    .addField(`abrazar:`,`Abrazas a quién mencionas. ***Sintaxis: d!abrazar [@usuario]***`)
                    .addField(`llorar:`,`Lloras. ***Sintaxis: d!llorar [@usuario]***`)
                    .addField(`lamer:`,`lames a quien menciones. ***Sintaxis: d!lamer [@usuario]***`)
                    .addField(`feliz:`,`Te pones feliz. ***Sintaxis: d!feliz [@usuario]***`)
                    .addField(`bailar:`,`Te pones a bailar. ***Sintaxis: d!bailar [@usuario]***`)
                    .addField(`fail:`,`Muestas que as cometido un fail. ***Sintaxis: d!fail [@usuario]***`)
                    .addField(`enfadado:`,`Muestas tu enfado. ***Sintaxis: d!enfadado [@usuario]***`)
                    .addField(`correr:`,`Corres. ***Sintexis: d!correr [@usuario]***`)
                    .addField(`despertar`,`Muestras que te as despertado. ***Sintaxis: d!despertar [@usuario]***`)
                    .addField(`confuso`,`Muestras que estas confuso. ***Sintaxis: d!confuso [@usuario]***`)
                    .addField(`dormir:`,`Muestras que estas dormido. ***Sintaxis: d!dormir [@usuario]***`)
                    .addField(`nervioso:`,`Muestras lo nervioso que estas. ***Sintaxis: d!nervioso [@usuario]***`)
                    .addField(`darcomer:`,`Das de comer a quien mencionas. ***Sintaxis: d!darcomer [@usuario]***`)
                    .addField(`tocar:`,`Tocas a quien mecionas.  ***Sintaxis: d!tocar [@usuario]***`)
                    .addField(`acariciar:`,`Acaricias a quien mencionas.  ***Sintaxis: d!acariciar [@usuario]***`)
                    .addField("asustar",`Asustas a quién mencionas.  ***Sintaxis: d!asustar [@usuario]***`)
                    .addField("tonto","Llamas tonto a quién mencionas.  ***Sintaxis: d!tonto [@usuario]***")
                    .addField("felicidades","Felicitas a quién mencionas.  ***Sintaxis: d!felicidades [@usuario]***")
                    .setTimestamp();
        
                message.channel.send(socialEmbed)
                .then(newMessage => newMessage.delete(78000));
            message.delete(78000)
            }
        
            function categoriaEntretenimiento(){
                const funEmbed = new Discord.RichEmbed()
                    .setTitle('Comandos de entretenimiento')
                    .setColor(0xefb810)
                    .addField(`bola8`,`Te contesta a una pregunta de sí o no. ***Sintaxis: d!bola8 <pregunta>***`)
                    .addField(`dado`,`Saca un numero aleatorio del 1 al 100. ***Sintaxis: d!dado***`)
                    .addField(`decir`,`El bot dice la frase que pongas. ***Sintaxis: d!decir <frase,palabra o numero>***`)
                    .addField(`moneda`,`Pone la foto de una moneda, Puede ser cara o cruz. ***Sintaxis: <d!moneda***>`)
                    .addField(`emoticono`,`Envia un emoticono aleatorio.  ***Sintaxis: <d!emoticono***>`)
                    .addField(`cartas:`,`Saca una carta aleatoria del 1 al 6 con posibilidad de sacar personajes (PokeToribio,MarisaTheKiller,Pikachu,Joker y Pokemari). ***Sintaxis: <d!cartas***>`)
                    .addField(`amor:`,`Calculas el por porcentaje (%) de amor entre las personas que menciones. ***Sintaxis: <d!amor> <@usuario> [@usuario]***`)
                    .addField(`ariesdice:`,`Es como el "Simon dice" pero con aries. ***Sintaxis: <d!ariesdice***>`)
                    .addField(`ppt:`,`El famoso juego de "Piedra,Papel o Tijeras" en discord y en español!. ***Sintaxis: <d!ppt> <@eleccion>*** `)
                    .addField(`spoiler:`,`Es como el comando **decir** pero pone todo con spoiler (||asi||). ***Sintaxis: d!spoiler <frase,palabra o numero>***`)
                    .setTimestamp();
        
                message.channel.send(funEmbed)
                .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
            }
        
            function categoriaNsfw() {
                if (message.channel.nsfw === false) return message.channel.send(`${message.author}, <:NSFWAries:590984948627013645> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NSFWAries:590984948627013645>`)
                const proEmbed = new Discord.RichEmbed()
                    .setTitle(`Comandos NSFW:`)
                    .setColor(0xefb810)
                    .addField(`follar:`,`Follar con quien mencionas.  ***Sintaxis: d!follar <@usuario>***`)
                    .addField(`chuparla:`,`Se la chupas a quien mencionas.  ***Sintaxis: d!chuparla <@usuario>***`)
                    .addField(`masturbarse:`,`Te masturbas.  ***Sintaxis: d!masturbarse [@usuario]***`)
                    .addField(`ariesdicensfw`,`Es como el "Simon dice" pero con aries y con cosas NSFW (+18)  ***Sintaxis: d!ariesdicensfw***`)
                    .setTimestamp();
        
                message.channel.send(proEmbed)
                .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
            }
        
            function categoriaModeracion() {
                const otherEmbed = new Discord.RichEmbed()
                .setTitle(`Comandos de moderacion:`)
                    .setColor(0xefb810)
                    .addField(`borrar:`,`Borra el numero de mensajes que definas. ***Sintaxis: d!borrar <numero>***`)
                    .addField(`bdecir`,`Igual que el decir del entretenimiento pero borra el comando puesto. ***Sintaxis: d!decir <frase,palabra o numero>***`)
                    .setTimestamp();
        
                message.channel.send(otherEmbed)
                .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
            }
        
            function categoriaUtiles() {
                    const suEmbed = new Discord.RichEmbed()
                        .setTitle('Comandos utiles')
                        .setColor(0xefb810)
                        .addField(`redes`,`Te muestra las redes sociales de AriesBot. ***Sintaxis: d!redes***`)
                        .addField(`servidor:`,`Te muestra la información del servidor. ***Sintaxis: d!servidor***`)
                        .addField(`usuario:`,`Te muestra la información del usuario mencionado. ***Sintaxis: d!usuario [@usuario]***`)
                        .addField(`afk`,`Sistema afk cuando te mencionan el bot pone el mensaje que definas.  ***Sintaxis: d!afk [razon]***`)
                        .addField(`foto`,`Manda la foto de perfil del usuario mencionado o la tuya si no mencionas a nadie.   ***Sintaxis: d!foto [@usuario]***`)
                        .addField(`codigo`,`Genera un codigo aleatorio en forma de XXXX**-**XXXX**-**XXXX.  ***Sintaxis: d!codigo***`)
                        .setTimestamp();
        
                    message.channel.send(suEmbed)
                    .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
                }

                function categoriaAnimales(){
                    const animales = new Discord.RichEmbed()
                    .setTitle("Comandos de animales")
                    .setColor(0xefb810)
                    .addField("gato","Envia gifs y fotos de gatos  ***Sintaxis: d!gato")
                    .addField("perro","Envia gifs y fotos de perros  ***Sintaxis: d!perro")
                    .setTimestamp();
                    message.channel.send(animales)
                    .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
                }

                function categoriastaffbot() {
                    const staffbot = new Discord.RichEmbed()
                        .setTitle('Comandos para sl staff del bot')
                        .setColor(0xefb810)
                        .addField(`recargar:`,`Recarga el comando deseado.`)
                        .addField(`reiniciar:`,`Reinicia el bot.`)
                        .addField(`nombreservidores:`,`Envia un mensaje con el nombre de todos los servidores en los que esta el bot.`)
                        .addField(`privado`,`envia un mensaje privado a la persona que menciones o des su ID`)
                        .setTimestamp();
        
                    message.channel.send(staffbot)
                    .then(newMessage => newMessage.delete(60000));
            message.delete(60000)
                }
            }
                module.exports.help = {
                    name: `ayuda`
                  }