import { cn } from "@/app/utils/utils";
import Link from "next/link";
import { FC } from "react";

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
export default InfoCard;
