import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

/**
 * api to create a new form in the db
 * @param movie as string
 * @param number as number
 * @param userId picked up from the sessin
 */
export const submitData = createTRPCRouter({
  formSubmit: protectedProcedure
    .input(
      z.object({
        movie: z.string(),
        number: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const createForm = await ctx.db.form.create({
        data: {
          userId: ctx.userId,
          movie: input.movie,
          number: input.number,
        },
      });

      return {
        formId: createForm.id,
      };
    }),
});
