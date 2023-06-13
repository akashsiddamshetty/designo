import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface H2Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const H2: FC<H2Props> = ({ children }) => {
  return (
    <h2 className="font-[500] text-[32px] leading-[36px] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
};

export default H2;
