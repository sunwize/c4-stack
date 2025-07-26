import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "./shared/env/server";

export default defineConfig({
  out: "./server/database/migrations",
  schema: "./server/database/schemas/index.ts",
  casing: "snake_case",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
