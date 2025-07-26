import { eq } from "drizzle-orm";
import { authenticatedProcedure } from "../../procedures/authenticatedProcedure";
import { wishlists } from "~/server/database/schemas";

export const retrieve = authenticatedProcedure
.handler(async ({ context }) => {
  const { db, user } = context;

  const wishlistItems = await db
    .select()
    .from(wishlists)
    .where(eq(wishlists.userId, user.id));

  return wishlistItems;
});
