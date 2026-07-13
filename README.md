{
  "name": "discord-blacklist-simple",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "prisma generate && tsc",
    "start": "node dist/index.js",
    "db:push": "prisma db push",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^6.11.1",
    "discord.js": "^14.21.0",
    "express": "^5.1.0",
    "express-rate-limit": "^8.0.1",
    "express-session": "^1.18.1",
    "helmet": "^8.1.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.3",
    "@types/express-session": "^1.18.2",
    "@types/node": "^22.15.30",
    "prisma": "^6.11.1",
    "tsx": "^4.20.3",
    "typescript": "^5.8.3"
  }
}
