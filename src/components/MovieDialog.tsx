import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { api } from "~/utils/api";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

export function MovieDialog(
  props: React.ComponentPropsWithoutRef<"dialog"> & {
    id: string;
  },
) {
  const inputRef = useRef<string>("");
  const { id } = props;
  const [movie, setMovie] = useState<string>();

  const editMovie = api.submitions.editMovie.useMutation({
    onSuccess(data) {
      setMovie(data);
    },
  });
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    //console.log(inputRef.current.value);
    editMovie.mutate({ movieId: id, movie: inputRef.current.value });
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Movie Name</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Movie Name</DialogTitle>
          <DialogDescription>
            Use this box to change the movie name
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Movie
            </Label>
            <Input id="name" className="col-span-3" ref={inputRef} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleClick}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
