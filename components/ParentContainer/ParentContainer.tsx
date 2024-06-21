import classNames from "classnames";
import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties; 
};

export const ParentContainer = ({ children, className, style }: Props) => {
  return (
    <div
      className={classNames(
        "w-full m-auto xl:px-[9%] lg:px-10 md:px-3 px-3",
        className
      )}
      style={style} 
    >
      {children}
    </div>
  );
};

