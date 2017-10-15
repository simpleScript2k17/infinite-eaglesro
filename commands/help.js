const Discord = require('discord.js'); 
exports.run = (client, message, args) => {  
  
const embed = new Discord.RichEmbed()
  .setTitle('Comenzi:')
  .addField('Teste pentru Helper', '/0,/1,/2,/3,/4,/5,/6,/7,/8,/9,/10')
  .addField('Cereri-Grade', '/acceptat,/respins')
  .addField('Admin Commands', '/reload + teste helper + cereri - grade.')
  .setTimestamp()
  .setColor(0x00FFFF)
  message.author.send({embed : embed});

  message.react("✅");  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h'],
    permLevel: 3
  };
  
  exports.help = {
    name: 'help',
    description: 'Îți arată comenzile de admin!',
    usage: '/help'
  };