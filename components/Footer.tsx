import React, { FC } from "react";
import Button from "./ui/Button";
import Logo from "./Logo";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="relative h-[1005px] w-full  md:h-[687px] lg:h-[613px]">
      <section className="absolute z-10 h-[379px] w-full overflow-hidden rounded-lg px-6 sm:h-[350px] sm:px-10 lg:h-[292px] lg:px-[164px]">
        <div className=" inset-0 inline-flex  w-full h-full flex-col items-center justify-center gap-8 rounded-lg bg-peach bg-bg-pattern-intro-web bg-right bg-no-repeat text-center lg:text-start lg:flex-row lg:items-center lg:justify-between px-[95px]   ">
          <div className="px-6 text-white  w-1/2  ">
            <h2 className="text-[32px] lg:mb-4 leading-9 sm:text-[40px]  sm:leading-10 md:px-[150px] lg:px-0 ">
              Let’s talk about your project
            </h2>
            <p className="text-base sm:leading-[26px] md:px-[70px] lg:px-0">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Button className="flex-1">Get in touch </Button>
        </div>
      </section>
      <section className=" absolute bottom-0 flex h-[815px] w-full items-center  bg-black text-center text-white md:h-[423px] lg:h-[393px]">
        <div className="mb-[64px] mt-[253px] flex h-[498px] w-full flex-col items-center justify-between px-[24px] md:mb-[80px]  md:mt-[166px] md:h-[177px] md:px-[39px] lg:px-[164px]">
          <div className="item-center relative flex w-full flex-1 flex-col justify-around md:flex-row">
            <div className=" flex w-full  items-center justify-center md:flex-1 md:items-start md:justify-start">
              <Logo />
            </div>
            <div className=" -bottom-2 my-[32px] h-[1px] w-full bg-white opacity-[0.1] md:absolute " />
            <nav className="flex flex-1 flex-col justify-around md:flex-[2]  md:flex-row md:items-start md:justify-end md:gap-[42px]">
              <Link href="/our-company">Our company</Link>
              <Link href="/locations">Locations </Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div className="flex w-full flex-1 flex-col justify-around md:flex-row md:justify-between md:text-left">
            <address className="text-light_grey">
              <span className="font-[700]">Designo Central Office</span> <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </address>
            <address className="text-light_grey">
              <span className="font-[700]">Contact Us (Central Office)</span>
              <br />
              <a href="tel:+1 253-863-8967">P : +1 253-863-8967</a>
              <br />
              <a href="mailto:contact@designo.co">M : contact@designo.co</a>
            </address>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
