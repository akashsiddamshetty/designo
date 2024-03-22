import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface HeaderdropdownContext {
  children: ReactNode;
}
interface HeaderdropdownContextType {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const HeaderdropdownContext = createContext<
  HeaderdropdownContextType | undefined
>(undefined);

export const HeaderDropdownProvider: FC<HeaderdropdownContext> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <HeaderdropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </HeaderdropdownContext.Provider>
  );
};

export const useHeaderDropdown = () => {
  const context = useContext(HeaderdropdownContext);
  if (!context) {
    throw new Error(
      "useHeaderDropdown must be used within a HeaderDropdownProvider"
    );
  }
  return context;
};
