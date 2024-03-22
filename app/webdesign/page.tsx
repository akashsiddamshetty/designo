import Card from "@/components/Card";
import CardsWrapper from "@/components/CardsWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmallBanner from "@/components/SmallBanner";
import { FC } from "react";
import { cn } from "../utils/utils";
import Link from "next/link";

const infocardData = [
  {
    title: "APP DESIGN",
    link: "/appdesign",
    bg: "bg-mobile-image-app-design sm:bg-tablet-image-app-design lg:bg-desktop-image-app-design",
  },
  {
    title: "GRAPHIC DESIGN",
    link: "/graphicdesign",
    bg: "bg-mobile-image-graphic-design sm:bg-tablet-image-graphic-design lg:bg-desktop-image-graphic-design",
  },
];

const projects = [
  {
    id: 1,
    title: "EXPRESS",
    content: `A multi-carrier shipping website for ecommerce businesses`,
    image: `/web-design/desktop/image-express.jpg`,
  },
  {
    id: 2,
    title: "TRANSFER",
    content: `Site for low-cost money transfers and sending money within seconds`,
    image: `/web-design/desktop/image-transfer.jpg`,
  },
  {
    id: 3,
    title: "PHOTON",
    content: `A state-of-the-art music player with high-resolution audio and DSP effects`,
    image: `/web-design/desktop/image-photon.jpg`,
  },
  {
    id: 4,
    title: "BUILDER",
    content: `Connects users with local contractors based on their location`,
    image: `/web-design/desktop/image-builder.jpg`,
  },
  {
    id: 5,
    title: "BLOGR",
    content: `Blogr is a platform for creating an online blog or publication`,
    image: `/web-design/desktop/image-blogr.jpg`,
  },
  {
    id: 6,
    title: "CAMP",
    content: `Get expert training in coding, data, design, and digital marketing`,
    image: `/web-design/desktop/image-camp.jpg`,
  },
];

interface webdesignProps {}

const webdesign: FC<webdesignProps> = ({}) => {
  return (
    <>
      <Header />
      <main>
        <SmallBanner
          title="Web Design"
          content={`We build websites that serve as powerful marketing tools
          and bring memorable brand experiences.`}
        />
        <CardsWrapper>
          {projects.map((project) => {
            const { id, title, content, image } = project;
            return (
              <Card key={id} title={title} content={content} image={image} />
            );
          })}
        </CardsWrapper>
        <div className="mx-6 mb-28 flex flex-col items-center justify-between gap-10 sm:mx-10 lg:mx-[164px] lg:flex-row">
          {infocardData.map((data, i) => {
            const { bg, title, link } = data;
            return (
              <div
                key={i}
                className={cn(
                  `group relative h-[250px] w-full cursor-pointer overflow-hidden  rounded-lg bg-cover  bg-no-repeat text-white sm:h-[200px] lg:h-[308px] lg:w-[541px]  ${bg}`
                )}
              >
                <div className="absolute h-full w-full bg-black bg-opacity-75 group-hover:bg-peach group-hover:bg-opacity-75  "></div>
                <div className="absolute inset-0  flex flex-col items-center justify-center gap-3 sm:gap-6">
                  <h1 className="text-center text-4xl uppercase sm:text-5xl">
                    {title}{" "}
                  </h1>
                  <Link
                    href={link}
                    className="flex  items-center justify-center gap-4 uppercase sm:gap-[21px]"
                  >
                    <span className="text-base">VIEW PROJECTS</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="10"
                        fill="none"
                        viewBox="0 0 5 10"
                      >
                        <path
                          stroke="#E7816B"
                          strokeWidth="2"
                          d="M1 1.135l4 4-4 4"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default webdesign;
