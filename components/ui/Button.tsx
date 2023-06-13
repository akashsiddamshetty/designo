import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="text-black rounded-[8px] tracking-[1px] px-[19px] py-[17px] uppercase bg-white">
      {children}
    </button>
  );
};

export default Button;
