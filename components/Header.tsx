import React, { FC } from "react";
import Logo from "./Logo";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="mb-[500px] flex items-center justify-between px-[24px] py-[35px] md:px-[39px] md:py-[64px] lg:px-[164px]">
      <Logo />
      <div className="hidden gap-[42px] text-black md:flex ">
        <Link href="/our-company">Our company</Link>
        <Link href="/locations">Locations </Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
