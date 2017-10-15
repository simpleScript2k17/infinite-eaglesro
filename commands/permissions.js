exports.run = (client, message, args) => {
     message.channel.send('`\`\`http\n' + JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)+'\n`\`\`')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['perm'],
  permLevel: 0
};

exports.help = {
  name: 'permissions',
description: 'Îți arată permisiunile tale!',
  usage: 'Folosește comanda [/permissions (mențiune)] !'
};