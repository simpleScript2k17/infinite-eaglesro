exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":warning: Nene.. :3")
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`:warning: **Nu ai spus o comandă pe care să o restartez ori nu am găsit acea comanda!**`);
  } else {
    message.channel.send(`:warning: Se restartează comanda...`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`:warning: Comanda **${command}** a primit reload cu succes!`);
          })
          .catch(e => {
            m.edit(`:warning: **S-a întâmpinat o eroare la comanda ${command}**\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'reload',
  description: 'Dai reload unei comenzi. [doar developerul]',
  usage: 'reload <command>'
};
