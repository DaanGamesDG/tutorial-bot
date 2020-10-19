const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'test', ['pong']);
  }

  run(client, message, args) {
    message.channel.send(`> 🏓 pinging...`).then(msg => {
      msg.edit(`> 🏓 Pong edit: \`${Date.now() - msg.createdAt }ms\`, api: \`${client.ws.ping}ms\``);    
    });
  }
}