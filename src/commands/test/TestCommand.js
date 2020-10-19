const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    let date = new Date();
    let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    let timeOffset = 1;
    let scrTime = new Date(utcTime + (3600000 * timeOffset));
    let t = `${scrTime}`
    let a = t
      .trim()
      .split(/\s+/);
    
    const embed = new MessageEmbed()
      .setTitle('Time in SCR')
      .setDescription(`\`${a[4]}\``)
    message.channel.send(embed)
  }
}