import React, { FC } from "react";
import Logo from "./Logo";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="mx-[24px] flex items-center justify-between md:mx-[39px] lg:mx-[164px] mb-[500px]">
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
