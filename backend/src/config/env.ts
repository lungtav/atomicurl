import "dotenv/config";

const PORT = Number(process.env.PORT) ?? 5000;

if (isNaN(PORT)) {
  throw new Error("A valid port is required ");
}

function validateEnv(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`No value for ${key}`);
  }
  return value;
}

const NODE_ENV = validateEnv("NODE_ENV");

export const env = {
  PORT,
  APP_URL: validateEnv("APP_URL"),
  DATABASE_URL: validateEnv("DATABASE_URL"),
  NODE_ENV: process.env.NODE_ENV ?? "development",
  ISPRODUCTION: (process.env.NODE_ENV ?? "development") === "production",
  LOG_LEVEL:
    (process.env.NODE_ENV ?? "development") === "development"
      ? "debug"
      : "info",
};
