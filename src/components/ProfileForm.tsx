"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { api } from "~/utils/api";

const formSchema = z.object({
  movie: z.string().min(2, {
    message: "The movie must have at least 2 characters.",
  }),
  number: z.string().transform((v) => Number(v) || 0),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movie: "",
      number: 0,
    },
  });
  const submitForm = api.submit.formSubmit.useMutation({
    onSuccess(data) {
      if (!data.formId) return;
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitForm.mutate({ movie: values.movie, number: values.number });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="movie"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Your Favorite Movie</FormLabel>
                <FormControl>
                  <Input placeholder="favorite movie" {...field} />
                </FormControl>
                <FormDescription>Your Favorite Movie</FormDescription>
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Favorite Number</FormLabel>
              <FormControl>
                <Input placeholder="favorite number" {...field} />
              </FormControl>
              <FormDescription>Your Favorite Numver</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
