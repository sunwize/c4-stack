import "dotenv/config";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/postgres-js";
import type postgres from "postgres";

import { env } from "../../shared/env/server";
import * as schema from "./schemas";

declare global {
  var __db__:
    | (PostgresJsDatabase<typeof schema> & {
        $client: postgres.Sql;
      })
    | undefined;
}

export function getDb() {
  if (globalThis.__db__) {
    return globalThis.__db__;
  }

  const db = drizzle({
    connection: {
      url: env.DATABASE_URL,
      prepare: false,
      ssl: false,
      max: 5,
      debug: env.NODE_ENV !== "production",
    },
    schema,
    casing: "snake_case",
  });

  if (env.NODE_ENV !== "production") {
    globalThis.__db__ = db;
  }

  return db;
}
