import { os } from "@orpc/server";
import type { H3Event } from "h3";

import { getDb } from "~/server/database";

export const publicProcedure = os
  .$context<{ event: H3Event }>()
  .use(async ({ next }) => {
    const db = getDb();

    return next({
      context: {
        db,
      },
    });
  });
