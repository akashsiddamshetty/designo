/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Button from "./ui/Button";
import Image from "next/image";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <section className="relative mb-[10px] flex h-[843px] flex-col items-center  overflow-hidden 	bg-peach bg-home-banner-bg bg-left bg-no-repeat px-[24px] text-center text-white md:mx-[39px] md:rounded-[15px] md:bg-right md:px-[58px] lg:mx-[164px] lg:h-[640px] lg:flex-row   lg:px-[95px] lg:text-left">
      <div className="flex flex-col items-center gap-[24px]  py-[80px] lg:items-start">
        <h2>Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="relative">
        <img
          className="scale-x-[2] scale-y-[1.8]"
          src="/home/desktop/image-hero-phone.png"
          alt="hero image iphone  "
        />
      </div>
    </section>
  );
};

export default Banner;
