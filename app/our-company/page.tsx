import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Header />
      <main>
        <section className="flex h-[715px] flex-col overflow-hidden sm:mx-10 sm:h-[632px] sm:rounded-2xl lg:mx-[164px] lg:h-[480px] lg:flex-row-reverse">
          <div className="bg flex-1 bg-mobile-about-hero-img bg-cover bg-no-repeat sm:bg-tablet-about-hero-img lg:bg-desktop-about-hero-img"></div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-peach p-6 text-center text-white sm:p-14 lg:items-start  lg:p-24 lg:text-start">
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.,
            </p>
          </div>
        </section>
        <section className="flex h-[865px] flex-col overflow-hidden sm:mx-10 sm:h-[632px] sm:rounded-2xl lg:mx-[164px] lg:h-[480px] lg:flex-row">
          <div className="bg flex-1  bg-cover bg-no-repeat "></div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-very_light_peach p-6 text-center  sm:p-14 lg:items-start  lg:p-24 lg:text-start">
            <h1 className="text-peach">World-class talent</h1>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
