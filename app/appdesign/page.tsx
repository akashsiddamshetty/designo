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
    title: "WEB DESIGN",
    link: "/webdesign",
    bg: "bg-mobile-image-web-design sm:bg-tablet-image-web-design lg:bg-desktop-image-web-design-large",
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
    title: "AIRFILTER",
    content: `Solving the problem of poor indoor air quality by filtering the air`,
    image: `/app-design/desktop/image-airfilter.jpg`,
  },
  {
    id: 2,
    title: "EYECAM",
    content: `Product that lets you edit your favorite photos and videos at any time`,
    image: `/app-design/desktop/image-eyecam.jpg`,
  },
  {
    id: 3,
    title: "FACEIT",
    content: `Get to meet your favorite internet superstar with the faceit app`,
    image: `/app-design/desktop/image-faceit.jpg`,
  },
  {
    id: 4,
    title: "TODO",
    content: `A todo app that features cloud sync with light and dark mode`,
    image: `/app-design/desktop/image-todo.jpg`,
  },
  {
    id: 5,
    title: "LOOPSTUDIOS",
    content: `A VR experience app made for Loopstudios`,
    image: `/app-design/desktop/image-loopstudios.jpg`,
  },
];

interface appdesignProps {}

const appdesign: FC<appdesignProps> = ({}) => {
  return (
    <>
      <Header />
      <main>
        <SmallBanner
          title="App Design"
          content={`Our mobile designs bring intuitive digital solutions to
          your customers right at their fingertips.`}
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
export default appdesign;
