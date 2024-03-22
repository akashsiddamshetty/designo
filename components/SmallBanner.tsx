import { FC } from "react";

interface SmallBannerProps {
  title: string;
  content: string;
}

const SmallBanner: FC<SmallBannerProps> = ({ title, content }) => {
  return (
    <section className="relative h-[320px]  bg-peach bg-background-img-here bg-contain bg-right-top bg-no-repeat sm:mx-10 sm:h-[252px]  sm:rounded-2xl sm:bg-bg-pattern-intro-web sm:bg-cover sm:bg-center   lg:mx-[164px]  ">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-center text-white">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </section>
  );
};
export default SmallBanner;
