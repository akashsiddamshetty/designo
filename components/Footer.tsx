import React, { FC } from "react";
import Button from "./ui/Button";
import H2 from "./ui/H2";
import Logo from "./Logo";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="relative flex h-[1005px] w-full  items-end justify-end">
      <div className="absolute top-0 mx-[24px] flex h-[379px] flex-col items-center justify-around rounded-[15px] bg-peach px-[24px] py-[64px] text-center text-white">
        <H2>Let’s talk about your project</H2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Button>Get in touch </Button>
      </div>
      <div className="flex h-[815px] flex-col items-center justify-end bg-black text-center text-white">
        <Logo />
        <Link href="/our-company">Our company</Link>
        <Link href="/locations">Locations </Link>
        <Link href="/contact">Contact</Link>
        <p>
          Designo Central Office 3886 Wellington Street Toronto, Ontario M9C 3J5
        </p>
        <p>
          Contact Us (Central Office) P : +1 253-863-8967 M : contact@designo.co
        </p>
      </div>
    </div>
  );
};

export default Footer;
