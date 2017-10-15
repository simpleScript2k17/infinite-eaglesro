const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.channel.send(':warning: ' + message.author + ', **nu ai menționat o persoană!**')
if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(":warning: Nu ești un admin...") 
          
     const embed = new Discord.RichEmbed()
        .setDescription("5. Ce faci în cazul în care cineva foloseste caps, spam ori face abuz de funtie?")
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
    name: '5',
    description: "",
    usage: ''
  };