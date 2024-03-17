import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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
  {
    title: "GRAPHIC DESIGN",
    link: "/graphicdesign",
    bg: "bg-mobile-image-graphic-design sm:bg-tablet-image-graphic-design lg:bg-desktop-image-graphic-design",
  },
];

const infoData = [
  {
    image:
      "https://raw.githubusercontent.com/akashsiddamshetty/designo/d10556aad3c6de8bfe2eb55793dce403e00430b2/public/home/desktop/illustration-passionate.svg",
    title: "PASSIONATE",
    content: `Each project starts with an in-depth brand research to ensure
      we only create products that serve a purpose. We merge art, design, and
      technology into exciting new solutions.`,
  },
  {
    image:
      "https://raw.githubusercontent.com/akashsiddamshetty/designo/d10556aad3c6de8bfe2eb55793dce403e00430b2/public/home/desktop/illustration-resourceful.svg",
    title: "RESOURCEFUL",
    content: `Everything that we do has a strategic purpose. We use an agile
      approach in all of our projects and value customer collaboration. It
      guarantees superior results that fulfill our clients’ needs.`,
  },
  {
    image:
      "https://raw.githubusercontent.com/akashsiddamshetty/designo/d10556aad3c6de8bfe2eb55793dce403e00430b2/public/home/desktop/illustration-friendly.svg",
    title: "FRIENDLY",
    content: ` We are a group of enthusiastic folks who know how to put
      people first. Our success depends on our customers, and we strive to give
      them the best experience a company can provide.`,
  },
];

interface InfoCard {
  title: string;
  link: string;
  bg: string;
}
const InfoCard: FC<InfoCard> = ({ title, link, bg }) => {
  return (
    <div
      className={cn(
        `group relative h-[250px] w-full cursor-pointer overflow-hidden  rounded-lg bg-cover  bg-no-repeat text-white sm:h-[200px] lg:h-[308px] lg:w-[541px]  ${bg}`,
        {
          ["lg:h-[640px]"]: title.toLowerCase() === "web design",
        }
      )}
    >
      <div className="absolute h-full w-full bg-black bg-opacity-75 group-hover:bg-peach group-hover:bg-opacity-75  "></div>
      <div className="absolute inset-0  flex flex-col items-center justify-center gap-3 sm:gap-6">
        <h1 className="text-center text-4xl uppercase sm:text-5xl">{title} </h1>
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
};

interface HomeInfoProps {}

const HomeInfo: FC<HomeInfoProps> = ({}) => {
  return (
    <section className="px-6 py-[120px] sm:px-10 lg:px-[164px]">
      <div className=" flex flex-col items-center justify-center gap-6 lg:h-[640px] lg:w-full lg:gap-x-14  lg:flex-col lg:flex-wrap lg:items-center lg:justify-start ">
        {infocardData.map((info, i) => {
          const { title, link, bg } = info;
          return <InfoCard key={i} title={title} link={link} bg={bg} />;
        })}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-20 py-[150px] sm:gap-8 sm:py-[120px] lg:flex-row lg:gap-[30px] ">
        {infoData.map((data, i) => {
          const { image, title, content } = data;
          return (
            <div
              key={i}
              className="relative flex w-full flex-col items-center justify-center gap-12 sm:flex-row lg:flex-col"
            >
              <div className="relative  h-[202px] w-[202px]  overflow-hidden">
                <div className="absolute  h-full w-full rounded-full bg-gradient-to-b from-transparent to-[#F1F3F5] "></div>
                <div className="absolute">
                  <Image
                    src={image}
                    alt="title"
                    height={202}
                    width={202}
                    className=" h-full w-full "
                  />
                </div>
              </div>
              <div className=" flex flex-1 flex-col items-center justify-center gap-8 text-center sm:items-start sm:gap-4 sm:text-start lg:items-center lg:text-center">
                <h1 className="text-xl">{title}</h1>
                <p className="text-base leading-[26px]">{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default HomeInfo;
