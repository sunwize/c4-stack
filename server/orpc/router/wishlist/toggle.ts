import z from "zod";
import { and, eq } from "drizzle-orm";
import { authenticatedProcedure } from "../../procedures/authenticatedProcedure";
import { wishlists } from "~/server/database/schemas/wishlists";

export const toggle = authenticatedProcedure
.input(
  z.object({
    cardId: z.string().nonempty("Card ID is required"),
    cardLocalId: z.string().nonempty("Card local ID is required"),
    cardName: z.string().nonempty("Card name is required"),
    setId: z.string().nonempty("Set ID is required"),
    setName: z.string().nonempty("Set name is required"),
  }),
)
.handler(async ({ context, input }) => {
  const { db, user } = context;
  const { cardId, cardLocalId, cardName, setId, setName } = input;

  // Check if the card is already in the user's wishlist
  const existingWishlistItem = await db
    .select()
    .from(wishlists)
    .where(
      and(
        eq(wishlists.userId, user.id),
        eq(wishlists.cardId, cardId),
      ),
    )
    .limit(1);

  if (existingWishlistItem.length > 0) {
    // Remove the card from the wishlist
    await db
      .delete(wishlists)
      .where(
        and(
          eq(wishlists.userId, user.id),
          eq(wishlists.cardId, cardId),
        ),
      );

    return null;
  }

  // Add the card to the wishlist
  const [newWishlistItem] = await db
    .insert(wishlists)
    .values({
      userId: user.id,
      cardId,
      cardName,
      cardLocalId,
      setId,
      setName,
    })
    .returning();

  return newWishlistItem;
});
