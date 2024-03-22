/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Button from "./ui/Button";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <section className="relative mb-[10px] flex h-[843px] flex-col items-center   overflow-hidden 	bg-peach bg-home-banner-bg bg-left bg-no-repeat px-[24px] text-center text-white md:mx-[39px] md:rounded-[15px] md:bg-right md:px-[58px] lg:mx-[164px] lg:h-[640px] lg:flex-row   lg:px-[95px] lg:text-left">
      <div className="flex flex-1 flex-col items-center gap-[24px] py-[80px] lg:items-start lg:justify-start lg:gap-[40px]">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p className="text-base">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="relative flex h-full w-full flex-1 items-center justify-end overflow-hidden ">
        <div className="h-full w-full ">
          <img
            className="absolute left-20 top-20 scale-125 opacity-75 "
            src={
              process.env.NEXT_PUBLIC_ENV
                ? "/designo/home/desktop/image-hero-phone.png"
                : "/home/desktop/image-hero-phone.png"
            }
            alt="hero image iphone  "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
