"use client";

import { Button, buttonVariants } from "@/shared/ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";
import { VariantProps } from "class-variance-authority";

export function SubmitButton(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    },
) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className={`${props.className} flex w-full items-center justify-center space-x-2`}>
      {pending && <Loader className='size-4 animate-spin' />}
      {props.children}
    </Button>
  );
}
