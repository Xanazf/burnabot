import { Client, Events } from 'discord.js';
import config from './config';

const { prefix, token, intents } = config;

const client = new Client({
  intents,
  presence: {
    status: 'online',
    activities: [
      {
        name: `${prefix}help`,
        type: 2,
      },
    ],
  },
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
