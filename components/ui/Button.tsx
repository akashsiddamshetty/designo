import { cn } from "@/app/utils/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva(
  "rounded-lg px-6 py-4 uppercase tracking-[1px] hover:bg-light_peach",
  {
    variants: {
      variant: {
        light: "bg-white text-black ",
        dark: "bg-peach text-white",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props} />
  );
};

export default Button;
