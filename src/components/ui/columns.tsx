"use client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Form = {
  id: string;
  userId: string;
  movie: string;
  number: number;
};

export const columns: ColumnDef<Form>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "movie",
    header: "Movie",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
];
