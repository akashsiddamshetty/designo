import Link from "next/link";
import React, { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center gap-[16px]">
      <div className=" matrix h-[24px] w-[24px] rounded-full bg-conic-gradient "></div>
      <Link
        href="/"
        className="text-[24px] font-[700] leading-[27px] tracking-[5px]"
      >
        DESIGNO
      </Link>
    </div>
  );
};

export default Logo;
