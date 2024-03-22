import { FC, ReactNode } from "react";

interface CardsWrapperProps {
  children: ReactNode;
}
const CardsWrapper: FC<CardsWrapperProps> = ({ children }) => {
  return (
    <div className="mx-6 my-24 flex flex-wrap items-start justify-start gap-10 sm:mx-[40px] sm:my-[120px] sm:gap-8 lg:mx-[164px] lg:gap-[30px]">
      {children}
    </div>
  );
};

export default CardsWrapper;
