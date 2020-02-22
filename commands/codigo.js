module.exports.run = async (bot, message) => {

    let replies1 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result1 = Math.floor((Math.random() * replies1.length))

    let replies2 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result2 = Math.floor((Math.random() * replies2.length))

    let replies3 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result3 = Math.floor((Math.random() * replies3.length))

    let replies4 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result4 = Math.floor((Math.random() * replies4.length))

    let replies5 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result5 = Math.floor((Math.random() * replies5.length))

    let replies6 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result6 = Math.floor((Math.random() * replies6.length))

    let replies7 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result7 = Math.floor((Math.random() * replies7.length))

    let replies8 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result8 = Math.floor((Math.random() * replies8.length))

    let replies9 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result9 = Math.floor((Math.random() * replies9.length))

    let replies10 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result10 = Math.floor((Math.random() * replies10.length))

    let replies11 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result11 = Math.floor((Math.random() * replies11.length))

    let replies12 = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p","A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l","Ñ","ñ","Z","z","X","x","C","c","V","v","B","b","N","n","M","m","1","2","3","4","5","6","7","8","8"]
    let result12 = Math.floor((Math.random() * replies12.length))
    
    message.channel.send(`${replies1[result1]}${replies2[result2]}${replies3[result3]}${replies4[result4]}**-**${replies5[result5]}${replies6[result6]}${replies7[result7]}${replies8[result8]}**-**${replies9[result9]}${replies10[result10]}${replies11[result11]}${replies12[result12]}`)

}
module.exports.help = {
    name: "codigo"
  }