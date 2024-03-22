/* eslint-disable @next/next/no-img-element */
import { FC, HtmlHTMLAttributes } from "react";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  content: string;
  image: string;
  title: string;
}

const Card: FC<CardProps> = ({ image, title, content }) => {
  return (
    <div className="group flex h-[478px] w-[327px] cursor-pointer flex-col overflow-hidden rounded-2xl sm:h-[310px] sm:w-[689px] sm:flex-row lg:h-[478px] lg:w-[350px] lg:flex-col">
      <div className="h-[320px] w-full sm:flex-1 ">
        <img
          className="h-full w-full object-fill "
          src={process.env.NEXT_PUBLIC_ENV ? `/designo${image}` : image}
          alt={title}
        />
      </div>
      <div className="flex h-auto flex-1 flex-col items-center justify-center gap-4 bg-[#FDF3F0] px-7 py-8 text-center group-hover:bg-peach group-hover:text-white ">
        <h1 className="text-xl text-peach group-hover:text-white">{title}</h1>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};
export default Card;
