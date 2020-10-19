const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
  }

  async run(client, message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const reason = args.slice(1).join(' ');
    if (!member) return message.channel.send(`> No User found.`);
    if (!reason) return message.channel.send(`> No reason specified.`);

    if (!message.member.permissions.has('BAN_MEMBERS'))
      return message.channel.send(`> You dont have the correct permissions to ban a user.`);
    if (message.member.roles.highest.position < member.roles.highest.position && !message.member.permissions.has('ADMINISTRATOR'))
      return message.channel.send(`> You are not above the user you want to ban!`);
    if (!member.kickable) return message.channel.send(`> Member is not bannable!`);

    try {
      await member.send(`> You are banned from **${message.guild.name}**. Reason: ${reason}`);
    } catch (e) { };
    await member.ban({ reason: `${message.author.tag} - ${reason}`});
    return message.channel.send(`> Successfully banned: **${member.user.tag}**. Reason: ${reason}.`);
  }
}