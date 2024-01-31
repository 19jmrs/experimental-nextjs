"use client";
import { ColumnDef, Row, getFacetedUniqueValues } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MovieDialog } from "./MovieDialog";

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
  {
    id: "actions",
    cell: ({ row }) => {
      const movie = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <MovieDialog id={movie.id} />
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Number</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
