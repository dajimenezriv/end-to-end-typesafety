import 'dotenv/config.js';

const readEnv = (key: string) => {
  const value = process.env[key];
  if (!value) console.warn(`Missing environment variable ${key}`);
  return value as string;
};

export const PORT = parseInt(readEnv('PORT'));

export const OAUTH2_DOMAIN = readEnv('OAUTH2_DOMAIN');
export const OAUTH2_CLIENT_ID = readEnv('OAUTH2_CLIENT_ID');
export const OAUTH2_CLIENT_SECRET = readEnv('OAUTH2_CLIENT_SECRET');
export const OAUTH2_ROLE_LANDLORD = readEnv('OAUTH2_ROLE_LANDLORD');

export const ROLE_TENANT = 'ROLE_TENANT';
export const ROLE_LANDLORD = 'ROLE_LANDLORD';
export const CLAIMS_NAMESPACE = 'https://codecake.fr/roles';
