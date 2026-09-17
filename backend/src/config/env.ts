import "dotenv/config";

const PORT = Number(process.env.PORT) ?? 5000;

if (isNaN(PORT)) {
  throw new Error("A valid port is required ");
}

function validateUrl(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`No value for ${key}`);
  }
  return value;
}

export const env = {
  PORT,
  APP_URL: validateUrl("APP_URL"),
  DATABASE_URL: validateUrl("DATABASE_URL"),
};
