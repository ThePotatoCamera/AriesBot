const discord = require('discord.js');
const client = new discord.Client();
client.on('clickButton', async (button) => {
    if(button.id === "button1") {
            
        message.channel.send("Funciona el primer boton")
    }else if (button.id == "button2"){
        message.channel.send("Funciona el segundo boton")
    }
});