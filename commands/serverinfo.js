const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`**_Informatii despre ${message.guild}_**`)
    .setDescription(`**> Server**\n• Nume: ${message.guild}\n• ID: ${message.guild.id}\n\n**> Membri**\n• Membri: ${message.guild.memberCount} \n• Owner: ${message.guild.owner} \n (ID:${message.guild.owner.id})\n\n**> Camere**\n• Text: ${message.guild.channels.filter(ch => ch.type === 'text').size}\n• Voice: ${message.guild.channels.filter(ch => ch.type === 'voice').size}\n• Canalul de bază: ${message.guild.defaultChannel}\n• Total Membrii: ${message.guild.channels.size}\n\n**> Alte informații**\n• Grade: \n${message.guild.roles.map(r => r.name).join(', ')}\n• Regiune: ${message.guild.region}\n• Member Verification Level: ${message.guild.verificationLevel}`)
    .setThumbnail(message.guild.iconURL)
		  .setColor(0x961515)
       .setTimestamp()
    message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Îți prezinta lista cu detaliile despre server.',
  usage: 'Folosește comanda "/serverinfo" !'
};