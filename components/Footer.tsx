import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="relative w-full h-[1005px]">
      <div className="absolute bg-peach">
        Let’s talk about your project Ready to take it to the next level?
        Contact us today and find out how our expertise can help your business
        grow. Get in touch Our
      </div>
      <div className="bg-black">
        company Locations Contact Designo Central Office 3886 Wellington Street
        Toronto, Ontario M9C 3J5 Contact Us (Central Office) P : +1 253-863-8967
        M : contact@designo.co
      </div>
    </div>
  );
};

export default Footer;
