import {
  Client,
  Events,
  GatewayIntentBits,
  OAuth2Scopes,
  PermissionFlagsBits,
} from 'discord.js';
import { prisma } from './db.js';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

async function syncGuild(guildId: string): Promise<void> {
  const guild = client.guilds.cache.get(guildId);
  if (!guild) return;

  await prisma.guildConfig.upsert({
    where: { guildId },
    create: {
      guildId,
      guildName: guild.name,
      enabled: false,
      dryRun: true,
    },
    update: { guildName: guild.name },
  });
}

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Discord bot logged in as ${readyClient.user.tag}`);
  for (const guild of readyClient.guilds.cache.values()) {
    await syncGuild(guild.id);
  }
});

client.on(Events.GuildCreate, async (guild) => {
  await syncGuild(guild.id);
});

export async function startBot(): Promise<void> {
  await client.login(process.env.DISCORD_TOKEN);
}

export function getInviteUrl(): string | null {
  if (!client.user) return null;
  return client.generateInvite({
    scopes: [OAuth2Scopes.Bot],
    permissions: [
      PermissionFlagsBits.ViewChannel,
      PermissionFlagsBits.SendMessages,
      PermissionFlagsBits.EmbedLinks,
      PermissionFlagsBits.ReadMessageHistory,
      PermissionFlagsBits.BanMembers,
    ],
  });
}
