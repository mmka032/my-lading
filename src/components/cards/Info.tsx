import type { ReactNode } from "react";
import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-line border-box-border
      shadow-lg shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-bold md:text-xl">
        {title}
      </h2>
      <Paragraph className="whitespace-pre-line">{description}</Paragraph>
    </div>
  );
};

export default Info;
