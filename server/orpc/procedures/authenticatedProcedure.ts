import { ORPCError } from "@orpc/server";
import { publicProcedure } from "./publicProcedure";
import { auth } from "~/server/utils/auth";

export const authenticatedProcedure = publicProcedure.use(async ({ next, context }) => {
  const { data: authUser, error: authError } = await tryCatch(
    auth.api.getSession({
      headers: context.event.headers,
    }),
  );

  if (authError) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "Authentication check failed.",
      cause: authError,
    });
  }

  if (!authUser) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "You must be logged in to access this resource.",
    });
  }

  return next({
    context: {
      user: authUser.user,
      session: authUser.session,
    },
  });
});
