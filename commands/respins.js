const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.channel.send(':warning: ' + message.author + ', **nu ai menționat o persoană!**')
		if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(":warning: Nu ești un admin...") 
  const embed = new Discord.RichEmbed()
   .setImage('https://i.imgur.com/BnD28EI.jpg')
   .setDescription(user + " , **ai fost **respins** de către:** " + message.author.username)
   .setTimestamp()
   .setFooter('✕ ☞ , ' + message.author.username)
   .setColor('#00ff00')
  message.channel.send({embed : embed})
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['res'],
  permLevel: 0
};

exports.help = {
  name: 'respins',
  description: "Comanda pentru admini.",
  usage: '/respins (mentiune)'
};