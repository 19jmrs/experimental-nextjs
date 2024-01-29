import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const getSubmtionsRouter = createTRPCRouter({
  getSubmtions: protectedProcedure.query(async ({ ctx }) => {
    const submitions = await ctx.db.form.findMany({
      where: {
        userId: ctx.userId,
      },
    });
    return submitions;
  }),
});
