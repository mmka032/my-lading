import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-heading-1 font-bold text-2xl sm:text-3xl md:text-4xl">
      {children}
    </h1>
  );
};
