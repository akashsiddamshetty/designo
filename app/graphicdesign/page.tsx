import Card from "@/components/Card";
import CardsWrapper from "@/components/CardsWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmallBanner from "@/components/SmallBanner";
import Link from "next/link";
import { FC } from "react";
import { cn } from "../utils/utils";

const infocardData = [
  {
    title: "WEB DESIGN",
    link: "/webdesign",
    bg: "bg-mobile-image-web-design sm:bg-tablet-image-web-design lg:bg-desktop-image-web-design-large",
  },
  {
    title: "APP DESIGN",
    link: "/appdesign",
    bg: "bg-mobile-image-app-design sm:bg-tablet-image-app-design lg:bg-desktop-image-app-design",
  },
];

const projects = [
  {
    id: 1,
    title: "TIM BROWN",
    content: `A book cover designed for Tim Brown’s new release, ‘Change’`,
    image: `/graphic-design/desktop/image-change.jpg`,
  },
  {
    id: 2,
    title: "BOXED WATER",
    content: `A simple packaging concept made for Boxed Water`,
    image: `/graphic-design/desktop/image-boxed-water.jpg`,
  },
  {
    id: 3,
    title: "SCIENCE",
    content: `A poster made in collaboration with the Federal Art Project`,
    image: `/graphic-design/desktop/image-science.jpg`,
  },
];

interface graphicdesignProps {}

const graphicdesign: FC<graphicdesignProps> = ({}) => {
  return (
    <>
      <Header />
      <main>
        <SmallBanner
          title="Graphic Design"
          content={`We deliver eye-catching branding materials that are
          tailored to meet your business objectives.`}
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
export default graphicdesign;
