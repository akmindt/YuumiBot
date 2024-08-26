const { Client, GatewayIntentBits } = require('discord.js');
let Messenger = require('./messenger');

class YuumiBot {
  constructor(token) {
    this.token = token;
    this.client = this.makeClient(token);
  }

  makeClient(token) {
    console.log('yuumibot client init');
    const client = new Client({ 
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
      ],
    });
    client.on('messageCreate', msg => {
      new Messenger(client, msg);
    });
    client.login(token);
    return client;
  }
}

module.exports = YuumiBot;
