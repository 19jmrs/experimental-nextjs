import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const submitionsRouter = createTRPCRouter({
  getSubmtions: protectedProcedure.query(async ({ ctx }) => {
    const submitions = await ctx.db.form.findMany({
      where: {
        userId: ctx.userId,
      },
    });
    return submitions;
  }),
  editMovie: protectedProcedure
    .input(
      z.object({
        movieId: z.string(),
        movie: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { count } = await ctx.db.form.updateMany({
        where: {
          id: input.movieId,
        },
        data: {
          movie: input.movie,
        },
      });

      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Couldn't find the movie ID:${ctx.userId}`,
        });
      }

      return input.movie;
    }),
});
