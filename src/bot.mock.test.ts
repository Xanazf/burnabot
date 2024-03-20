import { Client, Intents } from 'discord.js';

describe('Discord Bot', () => {
  let client: Client;

  beforeAll(() => {
    client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
  });

  afterAll(() => {
    client.destroy();
  });

  it('should connect to Discord', async () => {
    await client.login('YOUR_BOT_TOKEN');
    expect(client.isReady()).toBeTruthy();
  });

  it('should respond to a message', async () => {
    const mockMessage = {
      content: '!ping',
      reply: jest.fn(),
    };

    // Simulate receiving a message
    client.emit('messageCreate', mockMessage);

    // Wait for the bot to process the message
    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(mockMessage.reply).toHaveBeenCalledWith('Pong!');
  });
});
