import type { ReactNode } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel as BaseCarousel } from "flowbite-react";

const carouselTheme: CustomFlowbiteTheme["carousel"] = {
  "indicators" : {
    "active": {
      "off": "bg-white/50 hover:bg-white dark:bg-gray-600/50 dark:hover:bg-gray-600",
      "on": "bg-white dark:bg-gray-600"
    }
  },
  control: {
    base:
      "inline-flex h-8 w-8 items-center justify-center rounded-full " +
      "bg-white/30 group-hover:bg-white/50 group-focus:outline-none " +
      "group-focus:ring-4 group-focus:ring-white dark:bg-gray-600/30 " +
      "dark:group-hover:bg-gray-600/60 " +
      "dark:group-focus:ring-gray-600/70 sm:h-10 sm:w-10",
  },
};

export default function Carousel({
  className,
  children,
  ...props
}: {
  className: string | undefined;
  children: ReactNode;
  [key: string]: string;
}) {
  return (
    <BaseCarousel theme={carouselTheme} className={className || ""} {...props}>
      {children}
    </BaseCarousel>
  );
}
