import React, { FC } from "react";
import Button from "./ui/Button";
import Logo from "./Logo";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="relative flex h-[1005px] w-full  items-end justify-center md:h-[687px] lg:h-[613px]">
      <div className="absolute top-0 mx-[24px] flex h-[379px] flex-col items-center justify-around rounded-[15px] bg-peach px-[24px] py-[64px] text-center text-white md:mx-[39px] md:h-[350px] md:px-[58px] md:py-[57px] lg:mx-[164px] lg:h-[292px] lg:w-[1111px] lg:flex-row lg:justify-between lg:px-[95px] lg:text-left">
        <div className="lg:flex lg:w-[459px] lg:flex-col lg:justify-between lg:py-[72px]">
          <h2 className="md:px-[150px] lg:px-0 ">
            Let’s talk about your project
          </h2>
          <p className="md:px-[70px] lg:px-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button>Get in touch </Button>
      </div>
      <div className=" h-[815px] w-full  bg-black text-center text-white md:h-[423px] lg:h-[393px]">
        <div className="mb-[64px] mt-[253px] flex flex-col items-center justify-between  px-[24px] md:mb-[80px] md:mt-[166px] md:px-[39px]">
          <div className="flex flex-col md:flex-row">
            <Logo />
            <br className="h-2 w-full bg-white" />
            <Link href="/our-company">Our company</Link>
            <Link href="/locations">Locations </Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <p>
              Designo Central Office 3886 Wellington Street Toronto, Ontario M9C
              3J5
            </p>
            <p>
              Contact Us (Central Office) P : +1 253-863-8967 M :
              contact@designo.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
