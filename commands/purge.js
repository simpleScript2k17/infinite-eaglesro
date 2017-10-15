const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: Nu ești Helper / Admin ori nu ai permisiunea! \n Te rugăm să nu abuzezi de comandă!") 
  let reason = args.slice(0).join('');
  if (reason.length < 1) return message.channel.send(":warning: Nu ai adăugat un `număr de mesaje`!")
  if (reason.lenght > 100) return message.channel.send(":warning: Ai depășit numărul maxim de mesaje care pot fi șterse.")
	  
  message.channel.fetchMessages({
    limit: reason
  }).then(messages => message.channel.bulkDelete(messages));
  
  message.channel.send('')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prune'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Ștergi un număr de mesaje din channelul respectiv.',
  usage: 'Folosește comanda "/prune <cantitate> sau "/purge"!'
};
