const Discord = require("discord.js");

module.exports = async (bot, member) => {
  const channel = member.guild.systemChannel;
  if (!channel) {
    console.error(`[La Corbeille - guildMemberAdd] Le canal par défaut n'a pas été trouvé pour le membre ${member.user.username}`);
    return;
  } else {
    channel.send(`Bye bye ${member}!`);
  }
}