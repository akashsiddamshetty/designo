"use client";
import React, { FC, useEffect, useState } from "react";
import Logo from "./Logo";
import { HeaderDropdownProvider } from "@/app/context/HeaderDropdownProvider";
import HamburgerMenu from "./HamburgerMenu";
import HeaderDropDown from "./HeaderDropdown";
import NavLinks from "./NavLinks";
import { cn } from "@/app/utils/utils";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        " z-50 flex w-full items-center justify-between bg-white px-[24px] py-[35px] md:px-[39px] md:py-[64px] lg:px-[164px]",
        {
          ["fixed"]: isSticky,
        }
      )}
    >
      <Logo />
      <HeaderDropdownProvider>
        <HamburgerMenu />
        <NavLinks className="hidden gap-[42px] text-black md:flex " />
        <HeaderDropDown />
      </HeaderDropdownProvider>
    </header>
  );
};

export default Header;
