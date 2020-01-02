const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = [":grinning:"," :grimacing:"," :grin:"," :joy:"," :smiley:"," :smile:"," :sweat_smile:"," :relaxed:"," :kissing_closed_eyes:"," :hugging:"," :upside_down:"," :kissing_smiling_eyes:"," :sunglasses:"," :slight_smile:"," :kissing:"," :nerd:"," :blush:"," :kissing_heart:"," :money_mouth:"," :wink:"," :heart_eyes:"," :stuck_out_tongue:"," :innocent:"," :relieved:"," :laughing:"," :yum:"," :stuck_out_tongue_winking_eye:"," :stuck_out_tongue_closed_eyes:"," :smirk:"," :no_mouth:"," :neutral_face:"," :expressionless:"," :unamused:"," :rolling_eyes:"," :thinking:"," :flushed:"," :disappointed:"," :worried:"," :angry:"," :rage: ",":pensive:"," :confused:"," :slight_frown:"," :frowning2:"," :persevere:"," :confounded:"," :tired_face:"," :weary:"," :triumph:"," :open_mouth:"," :scream:"," :fearful:"," :cold_sweat:"," :hushed:"," :frowning:"," :anguished:"," :cry:"," :disappointed_relieved:"," :sleepy:","  :sweat:"," :sob:"," :dizzy_face:"," :astonished:"," :zipper_mouth:"," :mask:"," :thermometer_face:"," :head_bandage:"," :sleeping: "," :poop:"," :smiling_imp:"," :imp: ",":japanese_ogre:"," :japanese_goblin:  :baby: ",":man:"," :woman:"," :person_with_blond_hair:"," :older_man:"," :older_woman:",":smiley_cat:",":smirk_cat:"," :smile_cat: ",":joy_cat:"," :heart_eyes_cat:"," :kissing_cat:"," :crying_cat_face: ",":pouting_cat:"," :scream_cat:"," :see_no_evil:"," :hear_no_evil: ",":speak_no_evil:",":man_with_gua_pi_mao:"," :man_with_turban:"," :cop: ",":construction_worker: ",":guardsman:"," :spy: ",":santa:"," :angel:"," :princess:",":cowboy: ",":prince:"," :bride_with_veil:"," :mrs_claus::clown:"," :nauseated_face:"," :rofl: ",":drooling_face:"," :lying_face:"," :sneezing_face:"," :man_in_tuxedo: ",":shrug:"]

    let result = Math.floor((Math.random() * replies.length))

    let ballembed = new Discord.RichEmbed()
    .setColor("#efb810")
    .addField("Emoticono aleatorio:",replies[result])
    .setFooter("Mensaje enviado")
    .setTimestamp()
    message.channel.send(ballembed)
      
    }
    
    module.exports.help = {
        name: "emoticono"
      }  