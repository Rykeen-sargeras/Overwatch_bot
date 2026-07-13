function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const config = {
  port: Number(process.env.PORT ?? 3000),
  discordToken: required('DISCORD_TOKEN'),
  adminPassword: required('ADMIN_PASSWORD'),
  sessionSecret: required('SESSION_SECRET'),
  databaseUrl: required('DATABASE_URL'),
  globalDryRun: (process.env.GLOBAL_DRY_RUN ?? 'true').toLowerCase() !== 'false',
  production: process.env.NODE_ENV === 'production',
};

if (config.sessionSecret.length < 24) {
  throw new Error('SESSION_SECRET must be at least 24 characters long.');
}

if (config.adminPassword.length < 10) {
  throw new Error('ADMIN_PASSWORD must be at least 10 characters long.');
}
