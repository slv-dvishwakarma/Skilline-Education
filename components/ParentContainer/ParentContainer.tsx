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
        "max-w-[70rem] w-full m-auto xl:px-0 lg:px-3 md:px-3 px-3",
        className
      )}
      style={style} 
    >
      {children}
    </div>
  );
};

