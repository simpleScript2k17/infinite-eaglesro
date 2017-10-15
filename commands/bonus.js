const Discord = require('discord.js');
exports.run = function(client, message, args) { 
  let shoutbox = client.channels.find('name', 'shoutbox');
  let reason = args.slice(0).join(' ');
  let regRole = client.guilds.get(message.guild.id).roles.find('name', 'Advanced - Eagle || ⭐');
  let autoRole = client.guilds.get(message.guild.id).roles.find('name', 'Eagle');
  if (!shoutbox) return message.reply(':warning: **Nu există channelul "shoutbox"!**').catch(console.error);
  if (message.guild.member(message.author).roles.has(regRole.id)) return message.channel.send(":warning: **Ai primit deja bonusul de început. Te rog nu abuza de comandă!**")

    if(message.guild.member(message.author).addRole(regRole)){
  const embed = new Discord.RichEmbed()
  .setTitle("BONUS:")
  .setDescription(':muscle: Ai primit cu succes bonusul, felicitări!')
  .addField('Bonusul constă în:', 'Un grad special + o șansă mai mare la #cerere-grad.')
  .addField('Administrația vă urează:', 'O ședere plăcută și succes la jocuri!')
  .setTimestamp()
  .setColor(0x00FFFF)
  message.channel.send({embed : embed})
    };
    message.author.send(':link: **Dacă dorești să ne susții, îți poți invita prietenii pe serverele noastre cu aceste linkuri:**\n[A]InfiniteEagles.Ro https://discord.gg/jFtpFR4 ;\n[B]InfiniteEagles.Ro https://discord.gg/VaMTGfu')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bonus',
  description: 'Îți oferă un bonus din partea serverului!',
  usage: '/bonus'
};