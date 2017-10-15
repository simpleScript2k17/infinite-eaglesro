const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.channel.send(':warning: ' + message.author + ', **nu ai menționat o persoană!**')
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(":warning: Nu ești un admin...")
  const embed = new Discord.RichEmbed()
   .setImage('https://i.imgur.com/W3QDezA.png')
   .setDescription(user + " , **ai fost :**")
   .setTimestamp()
   .setFooter('✔ ☞ , ' + message.author.username)
   .setColor('#00ff00')
  message.channel.send({embed : embed})
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['acc'],
  permLevel: 0
};

exports.help = {
  name: 'acceptat',
  description: "Comanda pentru admini.",
  usage: '/acceptat (mentiune)'
};