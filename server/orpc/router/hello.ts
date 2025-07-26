import z from "zod";
import { publicProcedure } from "../procedures/publicProcedure";

export const hello = publicProcedure
.input(
  z.object({
    name: z.string().nonempty("Name is required"),
  }),
)
.handler(async ({ input }) => {
  return `Hello, ${input.name}!`;
});
