const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.channel.send(':warning: ' + message.author + ', **nu ai menționat o persoană!**')
if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(":warning: Nu ești un admin...")
          
     const embed = new Discord.RichEmbed()
        .setDescription("Ești pregătit, " + message.author + "?")
    message.channel.send({embed : embed})
    message.delete()
};

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['0'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'estipregatit',
        description: "Comanda pentru admini.",
        usage: '/estipregatit (mentiune)'
      };