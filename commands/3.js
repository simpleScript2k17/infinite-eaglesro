const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.channel.send(':warning: ' + message.author + ', **nu ai menționat o persoană!**')
if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(":warning: Nu ești un admin...") 
          
     const embed = new Discord.RichEmbed()
        .setDescription("3. Spune-mi o descriere despre tine, în minim 10-15 cuvinte.")
    message.channel.send({embed : embed})
    message.delete()
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: '3',
    description: "",
    usage: ''
  };