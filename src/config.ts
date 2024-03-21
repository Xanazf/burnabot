import { GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

export default {
  prefix: '!',
  token: process.env.BOT_TOKEN,
  intents: [
    GatewayIntentBits.Guilds, // discord.js necessary
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  bot: {
    app_id: process.env.APPLICATION_ID,
    public_key: process.env.PUBLIC_KEY,
    invite_link: process.env.INSTALL_LINK,
    permission_int: process.env.PERMISSION_INTEGER,
    client_id: process.env.OAUTH2_CLIENT_ID,
    client_secret: process.env.OAUTH2_CLIENT_SECRET,
  },
  dbtv: {
    dylan_live: process.env.DBTV_LIVE_CID,
    dylan_yt: process.env.DBTV_YT_CID,
    announcements: process.env.DBTV_ANNOUNCEMENTS_CID,
    system_log: process.env.DBTV_SYSTEM_LOGS_CID,
    moderation_log: process.env.DBTV_MOD_LOGS_CID,
    user_log: process.env.DBTV_USER_LOGS_CID,
  },
};
