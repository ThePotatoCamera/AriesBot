const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {

        let categoria = `${args[0]}`.toLowerCase();

        let pagina = parseInt(args[1], 10);
        if (!args[1]) {
            pagina = 1;
        }
        else {
            if (categoria == 'social' && pagina > 3) {
                pagina = 3;
            }
        }
        categoria = `${categoria + pagina}`;

        if (message.channel.name !== undefined) { message.react('📬') };

        switch (categoria) {
            case 'bot':
                categoriaBot();
                return;
            case 'social1':
                categoriaSocial1();
                return;
            case 'social2':
                categoriaSocial2();
                return;
            case 'social3':
                categoriaSocial3();
                return;
            case 'entretenimiento1':
                categoriaEntretenimiento();
                return;
            case 'moderacion1':
                categoriaModeracion();
                return;
            case 'moderación1':
                categoriaModeracion();
                return;
            case 'nsfw1':
               categoriaNsfw();
                return;
        
            case 'utiles1':
               categoriaUtiles();
                return;

            case `animales1`:
                categoriaAnimales();
                return;
            
            case 'staffbot1':
               categoriastaffbot();
                return;    
          
            }

            const mainEmbed = new Discord.MessageEmbed()
                .setTitle('Categorias de la ayuda')
                .setDescription(`Prefijo: d! *Sintaxis: <obligatorio> [opcional]*`)
                .setColor(0xefb810)
                .addField('===', '---')
                .addField('Bot', 'Comandos relacionados con el bot.')
                .addField('NSFW', 'Comandos NSFW. (+18)')
                .addField('Social', 'Comandos sociales.')
                .addField('Entretenimiento', 'Comandos de entretenimeinto.')
                .addField('Utiles', 'Comandos utiles')
                .addField("Animales","Comandos donde se envian gifs y fotos del animal que quieres")
                .addField('Moderacion','Comandos de moderacion')
                .addField('===', '---')
                .setFooter('Para ver los comandos de cada categoría,Pon el nombre de la categoria despues del comando')
                .setTimestamp();
            message.author.send(mainEmbed);
            
        
            function categoriaBot() {
                const botEmbed = new Discord.MessageEmbed()
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
        
                message.author.send(botEmbed);
            }
        
            function categoriaSocial1() {
                const socialEmbed = new Discord.MessageEmbed()
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
                    .setFooter('Siguiente página: d!ayuda social 2')
                    .setTimestamp();
        
                message.author.send(socialEmbed)
            }

            function categoriaSocial2() {
                const socialEmbed = new Discord.MessageEmbed()
                    .setTitle('Comandos sociales')
                    .setColor(0xefb810)
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
                    .setFooter('Siguiente página: d!ayuda social 3')
                    .setTimestamp();
        
                message.author.send(socialEmbed);
            }

            function categoriaSocial3() {
                const socialEmbed = new Discord.MessageEmbed()
                    .setTitle('Comandos sociales')
                    .setColor(0xefb810)
                    .addField("tonto","Llamas tonto a quién mencionas.  ***Sintaxis: d!tonto [@usuario]***")
                    .addField("felicidades","Felicitas a quién mencionas.  ***Sintaxis: d!felicidades [@usuario]***")
                    .addField('definirgenero', 'Define tu genero para ciertos comandos. ***Sintaxis: d!definirgenero [chico | chica]***')
                    .addField('f', 'Paga tus respetos. ***Sintaxis: d!f***')
                    .setTimestamp();
        
                message.author.send(socialEmbed);
            }
        
            function categoriaEntretenimiento(){
                const funEmbed = new Discord.MessageEmbed()
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
        
                message.author.send(funEmbed);
            
            }
        
            function categoriaNsfw() {
                if (message.channel.nsfw === false) return message.author.send(`${message.author}, <:NO_NSFW:681246772290781237> ***no puedo mostrar contenido NSFW fuera de los canales NSFW.*** <:NO_NSFW:681246772290781237>`)
                const proEmbed = new Discord.MessageEmbed()
                    .setTitle(`Comandos NSFW:`)
                    .setColor(0xefb810)
                    .addField(`follar:`,`Follar con quien mencionas.  ***Sintaxis: d!follar <@usuario>***`)
                    .addField(`chuparla:`,`Se la chupas a quien mencionas.  ***Sintaxis: d!chuparla <@usuario>***`)
                    .addField(`masturbarse:`,`Te masturbas.  ***Sintaxis: d!masturbarse [@usuario]***`)
                    .addField(`ariesdicensfw`,`Es como el "Simon dice" pero con aries y con cosas NSFW (+18)  ***Sintaxis: d!ariesdicensfw***`)
                    .setTimestamp();
        
                message.author.send(proEmbed);
            
            }
        
            function categoriaModeracion() {
                const otherEmbed = new Discord.MessageEmbed()
                .setTitle(`Comandos de moderación:`)
                    .setColor(0xefb810)
                    .addField(`borrar:`,`Borra el numero de mensajes que definas. ***Sintaxis: d!borrar <número>*** \n __**Nota: El límite de tiempo para borrar mensajes son 14 días.**__`)
                    .addField(`bdecir`,`Igual que el decir del entretenimiento pero borra el comando puesto. ***Sintaxis: d!decir <frase,palabra o número>***`)
                    .setTimestamp();
        
                message.author.send(otherEmbed);
            
            }
        
            function categoriaUtiles() {
                    const suEmbed = new Discord.MessageEmbed()
                        .setTitle('Comandos utiles')
                        .setColor(0xefb810)
                        .addField(`redes`,`Te muestra las redes sociales de AriesBot. ***Sintaxis: d!redes***`)
                        .addField(`servidor:`,`Te muestra la información del servidor. ***Sintaxis: d!servidor***`)
                        .addField(`usuario:`,`Te muestra la información del usuario mencionado. ***Sintaxis: d!usuario [@usuario]***`)
                        .addField(`afk`,`Sistema afk cuando te mencionan el bot pone el mensaje que definas.  ***Sintaxis: d!afk [razon]***`)
                        .addField(`foto`,`Manda la foto de perfil del usuario mencionado o la tuya si no mencionas a nadie.   ***Sintaxis: d!foto [@usuario]***`)
                        .addField(`codigo`,`Genera un codigo aleatorio en forma de XXXX**-**XXXX**-**XXXX.  ***Sintaxis: d!codigo***`)
                        .setTimestamp();
        
                    message.author.send(suEmbed);
            
                }

                function categoriaAnimales(){
                    const animales = new Discord.MessageEmbed()
                    .setTitle("Comandos de animales")
                    .setColor(0xefb810)
                    .addField("gato","Envia gifs y fotos de gatos  ***Sintaxis: d!gato")
                    .addField("perro","Envia gifs y fotos de perros  ***Sintaxis: d!perro")
                    .setTimestamp();
                    message.author.send(animales);
            
                }

                function categoriastaffbot() {
                    const staffbot = new Discord.MessageEmbed()
                        .setTitle('Comandos para sl staff del bot')
                        .setColor(0xefb810)
                        .addField(`recargar:`,`Recarga el comando deseado.`)
                        .addField(`reiniciar:`,`Reinicia el bot.`)
                        .addField(`nombreservidores:`,`Envia un mensaje con el nombre de todos los servidores en los que esta el bot.`)
                        .addField(`privado`,`envia un mensaje privado a la persona que menciones o des su ID`)
                        .setTimestamp();
        
                    message.author.send(staffbot);
            
                }
            }
                module.exports.help = {
                    name: `ayuda`
                  }