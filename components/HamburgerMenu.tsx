import { useHeaderDropdown } from "@/app/context/HeaderDropdownProvider";
import { FC } from "react";

interface HamburgerMenuProps {}

const HamburgerMenu: FC<HamburgerMenuProps> = ({}) => {
  const { isOpen, toggleDropdown } = useHeaderDropdown();
  return (
    <button
      id="hamburgerMenu"
      className="sm:hidden"
      type="button"
      onClick={() => toggleDropdown()}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <g>
            <path
              fill="#1D1C1E"
              fillRule="evenodd"
              d="M10 7.172L2.93.1.101 2.929 7.17 10l-7.07 7.071L2.929 19.9 10 12.829l7.071 7.07 2.829-2.828-7.071-7.07 7.07-7.072L17.072.101l-7.07 7.07z"
              clipRule="evenodd"
            ></path>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          fill="none"
          viewBox="0 0 24 20"
        >
          <g fill="#1D1C1E">
            <path d="M0 0H24V4H0z"></path>
            <path d="M0 8H24V12H0z"></path>
            <path d="M0 16H24V20H0z"></path>
          </g>
        </svg>
      )}
    </button>
  );
};
export default HamburgerMenu;
