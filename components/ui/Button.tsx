import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="text-black rounded-[8px] hover:bg-light_peach tracking-[1px] px-[19px] py-[17px] uppercase bg-white">
      {children}
    </button>
  );
};

export default Button;
