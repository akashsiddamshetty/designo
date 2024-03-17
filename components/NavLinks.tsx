import { cn } from "@/app/utils/utils";
import Link from "next/link";
import React, { forwardRef, Ref } from "react";

type NavLinksProps = React.ComponentProps<"nav"> & {
  ref?: Ref<HTMLDivElement>;
};

const NavLinks = forwardRef<HTMLDivElement, NavLinksProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn(className)} {...props}>
        <Link href="/our-company">Our company</Link>
        <Link href="/locations">Locations </Link>
        <Link href="/contact">Contact</Link>
      </nav>
    );
  }
);
NavLinks.displayName = "NavLinks";
export default NavLinks;
