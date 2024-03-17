"use client";
import { useHeaderDropdown } from "@/app/context/HeaderDropdownProvider";
import { cn } from "@/app/utils/utils";
import { FC, useRef } from "react";
import NavLinks from "./NavLinks";

interface HeaderDropDownProps {}

const HeaderDropDown: FC<HeaderDropDownProps> = ({}) => {
  const { isOpen, toggleDropdown } = useHeaderDropdown();
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        `fixed inset-0 z-40 mt-24 h-full w-full origin-top transform
        bg-black bg-opacity-75 shadow-md transition-transform duration-300`,
        {
          "scale-y-100": isOpen,
          "scale-y-0": !isOpen,
        }
      )}
    >
      <NavLinks
        ref={dropdownRef}
        className="flex w-full flex-col gap-8 bg-black px-6 py-12 text-white"
      />
    </div>
  );
};
export default HeaderDropDown;
